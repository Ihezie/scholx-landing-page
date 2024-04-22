import { motion } from "framer-motion";
import { fadeDown, doNothing } from "../framer-variants";

const Hero = () => {
  return (
    <motion.section
      transition={{
        when: "beforeChildren",
        delay: 0.5,
        staggerChildren: 0.5,
      }}
      variants={doNothing}
      initial="hide"
      animate="show"
      className="h-screen min-h-[700px] bg-mobile-hero bg-no-repeat bg-cover bg-[40%_50%] container-px pt-36 text-center text-white sm:pt-44 md:min-h-[800px] md:bg-tablet-hero md:pt-56 xl:bg-desktop-hero"
    >
      <motion.div variants={fadeDown}>
        <h1 className="text-4xl sm:text-[40px] md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[68px] xl:text-7xl xl:leading-[78px]">
          Engage, Connect, Empower: Transform Your Classroom Experience
        </h1>
        <p className="font-belanosima mt-16 italic md:mt-20 lg:mt-12">
          “Streamline workflows, boost engagement, and foster deeper learning
          with Scholx.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeDown}
        className="mt-14 flex flex-col items-center gap-7 md:gap-10 md:mt-20 lg:flex-row lg:justify-center lg:mt-12"
      >
        <button type="button" className="btn bg-french_blue">
          <a href="#sign up">Get Started</a>
        </button>
        <button type="button" className="btn border-2">
          <a href="#about">Learn More</a>
        </button>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
