import { motion } from "framer-motion";
import { slideIn } from "../framer-variants";

const Hero = () => {
  return (
    <motion.section
      transition={{
        when: "beforeChildren",
        delay: 0.5,
        staggerChildren: 0.5,
      }}
      variants={{
        show: {
          opacity: 1,
        },
        hide: {
          opacity: 1,
        },
      }}
      initial="hide"
      animate="show"
      className="h-screen min-h-[700px] xs:min-h-[800px] bg-mobile-hero bg-no-repeat bg-cover bg-[40%_50%] container-px pt-36 text-center text-white sm:pt-44 md:bg-tablet-hero md:pt-56 xl:bg-desktop-hero"
    >
      <motion.h1
        variants={slideIn}
        className="text-4xl sm:text-[40px] md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[68px] xl:text-7xl xl:leading-[78px]"
      >
        Engage, Connect, Empower: Transform Your Classroom Experience
      </motion.h1>
      <motion.h2 variants={slideIn} className="mt-16 italic md:mt-20 lg:mt-12">
        “Streamline workflows, boost engagement, and foster deeper learning with
        Scholx.”
      </motion.h2>
      <motion.div
        variants={slideIn}
        className="mt-14 flex flex-col items-center gap-7 md:gap-10 md:mt-20 lg:flex-row lg:justify-center lg:mt-12"
      >
        <button type="button" className="btn bg-french_blue">
          Get Started
        </button>
        <button type="button" className="btn border-2">
          Learn More
        </button>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
