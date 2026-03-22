// api/send.ts
// Vercel serverless function — se despliega automáticamente en /api/send
//
// Instalación: npm install resend
// Variable de entorno en Vercel Dashboard: RESEND_API_KEY=re_xxxxxxxx

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nombre, telefono, email, mensaje } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ error: "Nombre y email son requeridos" });
  }

  try {
    await resend.emails.send({
      from:    "FIBEPECH <contacto@fibepech.cl>",
      to:      ["fibepech@gmail.com"],
      replyTo: email,
      subject: `Nueva consulta de ${nombre} — FIBEPECH`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#a0614a;margin-bottom:8px">Nueva consulta desde fibepech.cl</h2>
          <hr style="border:none;border-top:1px solid #e8ddd2;margin-bottom:20px"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#8c7b72;width:100px">Nombre</td><td style="padding:6px 0;font-weight:500">${nombre}</td></tr>
            <tr><td style="padding:6px 0;color:#8c7b72">Teléfono</td><td style="padding:6px 0">${telefono || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#8c7b72">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#a0614a">${email}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e8ddd2;margin:16px 0"/>
          <p style="color:#8c7b72;margin-bottom:6px">Mensaje:</p>
          <p style="background:#f7f2ee;padding:14px;border-radius:8px;color:#1c1917;white-space:pre-wrap">${mensaje || "Sin mensaje"}</p>
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