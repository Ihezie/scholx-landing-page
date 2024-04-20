import { motion } from "framer-motion";
import { slideIn, popIn, viewPortOptions, doNothing } from "../framer-variants";
import { keyFeatures } from "../data";

const KeyFeatures = () => {
  return (
    <motion.section
      className="text-center section-mt container-px"
      id="key-features"
    >
      <motion.h2 variants={slideIn}>Key Features</motion.h2>
      <motion.section
        variants={doNothing}
        transition={{
          staggerChildren: 0.1,
        }}
        initial="hide"
        whileInView="show"
        className="grid grid-cols-1 gap-5 mt-9 justify-items-center sm:grid-cols-[max-content_max-content] sm:justify-center sm:gap-10 md-lg:grid-cols-[max-content_max-content_max-content] md-lg:gap-14 lg:grid-cols-12 lg:gap-4 lg:max-w-[900px] lg:mx-auto mb-10"
      >
        {keyFeatures.map(({ icon, feature }, index) => {
          let colSpan = "lg:!col-span-6";
          if (index === 2 || index === 3 || index === 4) {
            colSpan = "lg:!col-span-4";
          }
          return (
            <motion.div
              variants={popIn}
              key={index}
              className={`bg-french_blue rounded-2xl flex flex-col items-center gap-4 py-7 px-6 text-white size-52 justify-center sm:last:col-span-2 md-lg:last:col-span-3 ${colSpan} lg:flex-row lg:h-32 lg:w-full lg:py-0 lg:px-8 lg:gap-6 lg:text-left lg:justify-start lg:rounded-[20px]`}
            >
              <img className="size-14" src={icon} alt="feature icon" />
              <p className="font-belanosima text-lg">{feature}</p>
            </motion.div>
          );
        })}
      </motion.section>
    </motion.section>
  );
};
export default KeyFeatures;
