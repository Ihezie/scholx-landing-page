import { motion } from "framer-motion";
import { fadeUp, viewPortOptions, doNothing } from "../framer-variants";

const About = () => {
  return (
    <motion.section
      id="about"
      variants={doNothing}
      initial="hide"
      whileInView="show"
      viewport={viewPortOptions}
      transition={{
        staggerChildren: 0.4,
      }}
      className="text-center section-mt relative container-px"
    >
      <motion.h2 variants={fadeUp}>About Us</motion.h2>
      <motion.p variants={fadeUp}>
        At ScholX, we believe in transforming the traditional classroom
        experience into an engaging and interactive journey. With cutting-edge
        technology at the forefront, we empower educators and students to thrive
        in a dynamic learning environment
      </motion.p>
    </motion.section>
  );
};
export default About;
