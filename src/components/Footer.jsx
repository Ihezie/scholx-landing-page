import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import phoneIcon from "../assets/icons/phone-flip.svg";
import envelope from "../assets/icons/envelope.svg";
import scholxLogoWhite from "../assets/logos/scholx-logo-white.png";
import instagramLogo from "../assets/icons/instagram.svg";
import twitterLogo from "../assets/icons/twitter-alt.svg";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      className="bg-french_blue text-center text-white pt-8 pb-4 mt-28 xl:mt-36"
    >
      <section className="lg:flex lg:items-center lg:text-left lg:justify-between xl:justify-center  lg:mb-9 lg:px-[5%] xl:gap-[10%] xl:px-[10%]">
        <img
          className="w-28 mx-auto mb-9 lg:w-40 lg:mx-0 lg:mb-0"
          src={scholxLogoWhite}
          alt="Scholx logo"
        />
        <section className="container-px flex flex-col gap-9 mb-9 lg:grid lg:grid-cols-[max-content_max-content_max-content] lg:gap-14 lg:px-0 lg:mb-0">
          <div>
            <h3 className="lg:mb-2">Security & Privacy:</h3>
            <p>We ensure your data is safe with us.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Contact Information:</h3>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-14 lg:flex-col lg:gap-2">
              <div className="flex justify-center gap-3 lg:justify-start">
                <img className="w-5" src={envelope} alt="envelope-icon" />
                <a className="underline" href="mailto:info@scholx.ng">
                  info@scholx.ng
                </a>
              </div>
              <div className="flex justify-center gap-3 lg:justify-start">
                {" "}
                <img className="w-5" src={phoneIcon} alt="phone-icon" />
                <a className="underline" href="tel:+2349048328381">
                  +2349048328381
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3">Connect With Us:</h3>
            <div className="flex justify-center gap-6 lg:justify-start">
              <a
                className="hover:scale-125 my-transition"
                href="https://www.instagram.com/scholx.ng?igsh=MTZzbTNpc3Iyczhhcg%3D%3D&utm_source=qr"
              >
                <img className="w-7" src={instagramLogo} alt="instagram" />
              </a>
              <a
                className="hover:scale-125 my-transition"
                href="https://x.com/ScholX_ng/"
              >
                <img className="w-7" src={twitterLogo} alt="twitter/X" />
              </a>
            </div>
          </div>
        </section>
      </section>

      <div className="border-t pt-4 border-white">
        <p className="mb-1">
          UIcons by{" "}
          <a className="underline" href="https://www.flaticon.com/uicons">
            Flaticon
          </a>
        </p>
        <p>Copyright © 2024 Scholx. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};
export default Footer;
