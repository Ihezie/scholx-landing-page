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
      transition: {
        type: "tween",
      },
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
        className="fixed top-[75px] bg-white z-50 w-full container-px rounded-b-2xl origin-top md:hidden"
      >
        <ul className="capitalize">
          {navLinks.map(({ link }) => (
            <motion.li variants={child} key={link}>
              <a href={link}>{link}</a>
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
        className="z-30 fixed h-screen w-screen top-0 left-0 bg-black/65 backdrop-blur-sm md:hidden"
      ></motion.div>
    </>
  );
};
export default Dropdown;
