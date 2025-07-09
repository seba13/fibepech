import { PhoneCall } from "lucide-react";

export const Contact = () => {
  return (
    <div className={`flex col-gap-1`} style={{ color: "var(--text-color)" }}>
      {/* social media */}
      <a href="tel:++56986029932" className="link link--primary phone-container">
        <PhoneCall className="icon-media" />
        <span>+56 9 8602 9932</span>
      </a>
    </div>
  );
};
