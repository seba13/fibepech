import { Facebook, Instagram } from "lucide-react";

export const SocialMedia = () => {
  return (
    <div>
      <div className="social-media">
        <a href="#" className="link link--primary">
          <Instagram className="icon-media" />
        </a>

        <a href="#" className="link link--primary">
          <Facebook className="icon-media" />
        </a>
      </div>
    </div>
  );
};
