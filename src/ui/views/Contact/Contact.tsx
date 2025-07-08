import { Signature } from "lucide-react";
import Typography from "../../../components/Typography/Typhography";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";

export const Contact = () => {
  const { paddingHorizontal, paddingVertical, isMobile } = useDeviceStyles();

  return (
    <div
      id="contact"
      className={`
      ${paddingHorizontal}
      ${paddingVertical}
      flex flex-col row-gap-2`}
      style={{
        minWidth: 250,
        backgroundColor: "var(--color-brown-100)",
      }}
    >
      <div className="flex flex-col row-gap-1">
        <Typography
          variant="h1"
          className={`flex items-center col-gap-0-5  ${
            isMobile ? "justify-center" : ""
          }`}
          style={{
            color: "var(--color-midnight-blue-700)",
          }}
        >
          <Signature size={isMobile ? 30 : 40} /> Contacto
        </Typography>
      </div>

      <form action="">
        <div className="flex flex-col row-gap-1" style={{ maxWidth: 650 }}>
          <div className="flex flex-col row-gap-0-5">
            <label htmlFor="firstName">Nombre</label>
            <input type="text" name="first-name" id="firstName" />
          </div>
          <div className="flex flex-col row-gap-0-5">
            <label htmlFor="firstName">apellido</label>
            <input type="text" name="last-name" id="firstName" />
          </div>
          <div className="flex flex-col row-gap-0-5">
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="flex flex-col row-gap-0-5">
            <label htmlFor="message-email">mensaje</label>
            <input type="text" name="message" id="message-email" />
          </div>

          <input
            type="button"
            value="Enviar"
            style={{ alignSelf: "flex-start" }}
          />
        </div>
      </form>
    </div>
  );
};
