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
      }, 200);
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
        <div
          className={`logo ${
            showDropdown ? "!text-white" : ""
          }  mx-auto w-max md:hidden`}
        >
          SCHOLX
        </div>
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
          className="max-[320px]:right-3 block absolute right-7 top-1/2 -translate-y-1/2 text-[28px] sm:right-12 md:hidden"
          onClick={() => {
            setShowDropdown(true);
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-white group-[.fixed-header]:text-black"
          />
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
