import { fadeUp, viewPortOptions } from "../framer-variants";
import { motion, AnimatePresence } from "framer-motion";
import { productBenefits } from "../data";
import { useState, useEffect } from "react";

const Benefits = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <motion.section
      id="benefits"
      initial="hide"
      whileInView="show"
      className="container-px section-top-spacing relative"
    >
      <motion.h2
        viewport={viewPortOptions}
        variants={fadeUp}
        className="capitalize text-center"
      >
        Benefits
      </motion.h2>
      <motion.div
        variants={fadeUp}
        viewport={viewPortOptions}
        className="flex relative"
      >
        {productBenefits.map(({ title }, index) => (
          <button
            type="button"
            key={title}
            className={`w-1/2 border-b border-stone-300 font-belanosima capitalize py-3 transition-colors duration-500 text-lg ${
              currentTab === index ? "bg-alice-blue" : ""
            }`}
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {title}
          </button>
        ))}
        <div
          className={`w-1/2 absolute border-b-4 rounded border-french_blue bottom-0 transition-all duration-300 left-0 ${
            currentTab === 1 ? "translate-x-full" : ""
          }`}
        ></div>
      </motion.div>
      <motion.section className="mt-10">
        {productBenefits[currentTab].benefits.map((item, index) => (
          <SingleBenefit
            key={index}
            benefit={item.benefit}
            details={item.details}
            index={index}
            currentTab={currentTab}
          />
        ))}
      </motion.section>
    </motion.section>
  );
};
export default Benefits;

const SingleBenefit = ({ benefit, details, index, currentTab }) => {
  const [detailsAreVisible, setDetailsAreVisible] = useState();
  useEffect(() => {
    if (index === 0) {
      setDetailsAreVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);
  return (
    <motion.article
      initial="hide"
      whileInView="show"
      variants={fadeUp}
      viewport={viewPortOptions}
      className="border-b border-gray-300 transition-none"
    >
      <header
        onClick={() => {
          setDetailsAreVisible(!detailsAreVisible);
        }}
      >
        <button
          type="button"
          aria-expanded={detailsAreVisible}
          aria-label="open accordion"
          className="flex w-full items-center py-5 text-left group relative"
        >
          <h3 className="w-4/5 group-hover:text-french_blue transition-colors duration-300">
            {benefit}
          </h3>
          <div
            className={`size-10 absolute right-0 flex justify-center items-center rounded-full group-hover:bg-alice-blue transition-all duration-300 ${
              detailsAreVisible ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="512"
              height="512"
              className="size-5 fill-french_blue"
            >
              <path d="M0,8.057l9.52,9.507a3.507,3.507,0,0,0,4.948,0L24,8.046,21.879,5.929l-9.531,9.517a.5.5,0,0,1-.707,0L2.121,5.94Z" />
            </svg>
          </div>
        </button>
      </header>
      <AnimatePresence>
        {detailsAreVisible && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-grayishBlue">{details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
