import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { navLinks } from "../data";
import { motion } from "framer-motion";
import { fadeDown } from "../framer-variants";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [headerStyles, setHeaderStyles] = useState("absolute top-12");
  const headerRef = useRef();

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const boundary = 48;
        if (boundary <= window.scrollY) {
          setHeaderStyles("fixed-header");
        } else {
          setHeaderStyles("absolute top-12");
        }
      }, 150);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        variants={fadeDown}
        initial="hide"
        animate="show"
        className={`w-full container-px group z-40 ${headerStyles}`}
      >
        <div className="logo mx-auto w-max md:hidden">SCHOLX</div>
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center text-white capitalize font-medium group-[.fixed-header]:text-black">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link} className="relative animated-underline ">
                <a
                  className="group-[.fixed-header]:hover:text-french_blue"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="logo">SCHOLX</li>
            {navLinks.slice(2).map((link) => (
              <li key={link} className="relative animated-underline">
                <a
                  className="group-[.fixed-header]:hover:text-french_blue"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="max-[320px]:right-3 block absolute right-7 top-1/2 -translate-y-1/2 sm:right-12 md:hidden"
          onClick={() => {
            setShowDropdown(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentcolor"
            className="text-white size-7 group-[.fixed-header]:text-black"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </motion.header>
      <AnimatePresence>
        {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
      </AnimatePresence>
    </>
  );
};
export default Header;

// Give Header white background when user scrolls past a certain point.
