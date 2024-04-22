import star from "../assets/icons/star.svg";
import sun from "../assets/sun.svg";
import asterisk from "../assets/asterisk.svg";
import { fadeUp, viewPortOptions } from "../framer-variants";
import { motion } from "framer-motion";

const Benefits = ({ title, benefits }) => {
  return (
    <motion.section className="container-px section-mt relative">
      {/* <img src={sun} alt="decorative icon" className="w-24 absolute hidden md:block right-0 rotate-180 -z-10 top-1/4 -translate-y-1/4" />
      <img src={asterisk} alt="decorative icon" className="w-36 absolute hidden md:block right-0 -z-10 top-3/4 -translate-y-3/4 left-0 -translate-x-1/2" /> */}
      <motion.h2
        initial="hide"
        whileInView="show"
        variants={fadeUp}
        viewport={viewPortOptions}
        className="capitalize text-center"
      >
        Benefits for {title}
      </motion.h2>
      <ul className="flex flex-col gap-5">
        {benefits.map(({ benefit, details }, index) => (
          <motion.li
            initial="hide"
            whileInView="show"
            variants={fadeUp}
            viewport={viewPortOptions}
            key={index}
            className="flex items-start gap-3"
          >
            <img src={star} alt="*" />
            <article>
              <h3 className="">{benefit}</h3>
              <p>{details}</p>
            </article>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
export default Benefits;
