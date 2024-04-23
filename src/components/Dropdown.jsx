import { navLinks } from "../data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
        className="fixed bg-french_blue z-50 w-full rounded-b-[30px] origin-top md:hidden"
      >
        <motion.header
          variants={child}
          className="relative flex justify-center mt-12 mb-8"
        >
          <div className="logo">SCHOLX</div>
          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="max-[320px]:right-3 block absolute right-7 top-1/2 -translate-y-1/2 text-[28px] sm:right-12"
          >
            <FontAwesomeIcon icon={faClose} className="text-white " />
          </button>
        </motion.header>
        <ul className="capitalize text-white font-medium flex flex-col gap-3 items-center mb-6">
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
