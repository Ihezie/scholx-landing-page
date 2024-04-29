import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import phoneIcon from "../assets/icons/phone-flip.svg";
import envelope from "../assets/icons/envelope.svg";
import scholxLogoWhite from "../assets/logos/scholx-logo-white.png";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      className="bg-french_blue container-px text-center text-white pt-8 pb-4 mt-28 xl:mt-36"
    >
      <img
        className="w-28 mx-auto mb-9"
        src={scholxLogoWhite}
        alt="Scholx logo"
      />
      <section className="flex flex-col gap-9 mb-9 lg:flex-row lg:justify-center lg:gap-[20%]">
        <div>
          <h3 className="lg:mb-2">Security & Privacy:</h3>
          <p>We ensure your data is safe with us.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Contact Information:</h3>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-14">
            <div className="flex justify-center gap-3">
              <img className="w-5" src={envelope} alt="envelope-icon" />
              <a className="underline" href="mailto:info@scholx.ng">
                info@scholx.ng
              </a>
            </div>
            <div className="flex justify-center gap-3">
              {" "}
              <img className="w-5" src={phoneIcon} alt="phone-icon" />
              <a className="underline" href="tel:+2349048328381">
                +2349048328381
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
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


// https://www.instagram.com/scholx.ng?igsh=MTZzbTNpc3Iyczhhcg%3D%3D&utm_source=qr

// https://x.com/ScholX_ng/