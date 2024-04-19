import { navLinks } from "../data";
import { motion } from "framer-motion";

const Dropdown = ({ setShowDropdown }) => {
  const container = {
    show: {
      scaleY: 1,
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
      scaleY: 0,
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
        className="fixed bg-french_blue z-40 w-full container-px rounded-b-[30px] origin-top pt-28 pb-6 md:hidden"
      >
        <ul className="capitalize text-white font-medium flex flex-col gap-3 items-center">
          {navLinks.map((link) => (
            <motion.li
              onClick={() => {
                setShowDropdown(false);
              }}
              className="relative"
              variants={child}
              key={link}
            >
              <a
                className="focus:text-black/80 hover:text-black/80"
                href={`#${link}`}
              >
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
        className="z-30 fixed h-screen w-screen top-0 left-0 backdrop-blur-md md:hidden"
      ></motion.div>
    </>
  );
};
export default Dropdown;
