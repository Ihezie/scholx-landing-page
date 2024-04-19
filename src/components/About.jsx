import blob from "../assets/blob-1.svg";
import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  viewPortOptions,
  doNothing,
} from "../framer-variants";

const About = () => {
  return (
    <motion.section
      variants={doNothing}
      initial="hide"
      whileInView="show"
      viewport={viewPortOptions}
      transition={{
        staggerChildren: 0.4,
      }}
      className="text-center mt-28 relative container-px xl:mt-36"
    >
      <motion.img
        variants={fadeIn}
        className="absolute -z-10 left-0 -top-10 sm:w-24 sm:-top-14 lg:w-32 xl:w-44"
        src={blob}
        alt="blob"
      />
      <motion.h2 variants={slideIn} id="about">
        About Us
      </motion.h2>
      <motion.p variants={slideIn} className="mt-9">
        At ScholX, we believe in transforming the traditional classroom
        experience into an engaging and interactive journey. With cutting-edge
        technology at the forefront, we empower educators and students to thrive
        in a dynamic learning environment
      </motion.p>
    </motion.section>
  );
};
export default About;
