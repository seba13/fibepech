// api/send.ts
// Protecciones implementadas:
//   1. Rate limiting por IP — máx 3 envíos cada 10 minutos
//   2. Validación de campos — longitud máxima, formato email
//   3. Sanitización básica — elimina HTML del input
//   4. Solo acepta POST con Content-Type correcto

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Rate limiter en memoria ──────────────────────────────────────────────────
// Funciona dentro de una misma instancia de la function.
// Para producción a gran escala se usaría Redis/Upstash, pero para
// un formulario de contacto esto es más que suficiente.
const rateMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT      = 3;           // máx envíos por ventana
const RATE_WINDOW_MS  = 10 * 60 * 1000; // ventana de 10 minutos

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    // Primera vez o ventana expirada → reiniciar
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

// ─── Sanitización básica ──────────────────────────────────────────────────────
function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

// ─── Validación de email ──────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {

  // Solo POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Verificar Content-Type — rechaza requests que no sean JSON
  const ct = req.headers["content-type"] ?? "";
  if (!ct.includes("application/json")) {
    return res.status(400).json({ error: "Content-Type debe ser application/json" });
  }

  // Obtener IP real (Vercel pasa la IP en este header)
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    "unknown";

  // Rate limiting
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Demasiados intentos. Espera 10 minutos antes de volver a enviar.",
    });
  }

  // Extraer y validar campos
  const { nombre, telefono, email, mensaje } = req.body ?? {};

  if (!nombre || !email) {
    return res.status(400).json({ error: "Nombre y email son requeridos" });
  }

  // Validar longitudes máximas (evita payloads enormes)
  if (
    String(nombre).length  > 100 ||
    String(email).length   > 200 ||
    String(telefono).length > 20 ||
    String(mensaje).length > 2000
  ) {
    return res.status(400).json({ error: "Los campos exceden el largo máximo permitido" });
  }

  // Validar formato email
  if (!isValidEmail(String(email))) {
    return res.status(400).json({ error: "El email no tiene un formato válido" });
  }

  // Sanitizar inputs antes de incluirlos en el HTML del correo
  const sNombre   = sanitize(String(nombre));
  const sEmail    = sanitize(String(email));
  const sTelefono = sanitize(String(telefono || "—"));
  const sMensaje  = sanitize(String(mensaje  || "Sin mensaje"));

  try {
    await resend.emails.send({
      from:    "FIBEPECH <contacto@fibepech.cl>",
      to:      ["fibepech@gmail.com"],
      replyTo: sEmail,
      subject: `Nueva consulta de ${sNombre} — FIBEPECH`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#a0614a;margin-bottom:8px">Nueva consulta desde fibepech.cl</h2>
          <hr style="border:none;border-top:1px solid #e8ddd2;margin-bottom:20px"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#8c7b72;width:100px">Nombre</td><td style="padding:6px 0;font-weight:500">${sNombre}</td></tr>
            <tr><td style="padding:6px 0;color:#8c7b72">Teléfono</td><td style="padding:6px 0">${sTelefono}</td></tr>
            <tr><td style="padding:6px 0;color:#8c7b72">Email</td><td style="padding:6px 0"><a href="mailto:${sEmail}" style="color:#a0614a">${sEmail}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e8ddd2;margin:16px 0"/>
          <p style="color:#8c7b72;margin-bottom:6px">Mensaje:</p>
          <p style="background:#f7f2ee;padding:14px;border-radius:8px;color:#1c1917;white-space:pre-wrap">${sMensaje}</p>
          <p style="font-size:11px;color:#c9b9a7;margin-top:24px">Enviado desde el formulario de contacto de fibepech.cl</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}