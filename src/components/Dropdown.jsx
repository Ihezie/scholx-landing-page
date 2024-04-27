import { navLinks } from "../data";
import { motion } from "framer-motion";

const Dropdown = ({ setShowDropdown }) => {
  const container = {
    show: {
      height: "auto",
      transition: {
        type: "tween",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    hide: {
      transition: {
        type: "tween",
      },
      height: 0,
    },
  };
  const child = {
    show: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: "-60%",
      transition: {
        duration: 0.1,
      },
    },
  };
  const overlay = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };
  return (
    <>
      <motion.aside
        variants={container}
        initial="hide"
        animate="show"
        exit="hide"
        className="fixed bg-french_blue z-40 w-full rounded-b-[30px] origin-top md:hidden"
      >
        <ul className="capitalize mt-32 sm:mt-36 text-white font-medium flex flex-col gap-3 items-center mb-6">
          {navLinks.map((link) => (
            <motion.li
              onClick={() => {
                setTimeout(() => {
                  setShowDropdown(false);
                }, 1000);
              }}
              className="relative"
              variants={child}
              key={link}
            >
              <a className="animated-underline" href={`#${link}`}>
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.aside>
      <motion.div
        variants={overlay}
        initial="hide"
        animate="show"
        exit="hide"
        onClick={() => {
          setShowDropdown(false);
        }}
        className="z-30 fixed h-screen w-screen top-0 left-0 bg-black/70 md:hidden"
      ></motion.div>
    </>
  );
};
export default Dropdown;
