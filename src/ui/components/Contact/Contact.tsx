import { Facebook, Instagram, PhoneCall } from "lucide-react";

export const Contact = () => {
  return (
    <div className="contact-container">
      {/* social media */}
      <div className="social-media">
        <a>
          <Instagram size={20} style={{ color: "var(--icon-color)" }} />
        </a>

        <a>
          <Facebook size={20} style={{ color: "var(--icon-color)" }} />
        </a>
      </div>

      <div className="row-center">
        <PhoneCall size={20} style={{ color: "var(--icon-color)" }} />
        <span> +5699999999</span>
      </div>
    </div>
  );
};
