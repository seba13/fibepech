import { Facebook, Instagram } from "lucide-react";

export const SocialMedia = () => {
  return (
    <div>
      <div className="social-media">
        <a
          href="https://www.instagram.com/mvanesa.trivino.harros/"
          target="_blank"
          className="link link--primary"
        >
          <Instagram className="icon-media" />
        </a>

        <a
          href="https://www.facebook.com/vanesaT.H?rdid=ZTSG7sWxGB9w49fs#"
          target="_blank"
          className="link link--primary"
        >
          <Facebook className="icon-media" />
        </a>
      </div>
    </div>
  );
};
