import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { fadeDown } from "../framer-variants";
import scholxLogoWhite from "../assets/logos/scholx-logo-white.png";
import scholxLogoBlue from "../assets/logos/scholx-logo-blue.png";
import closeIcon from "../assets/icons/cross.svg";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [headerStyles, setHeaderStyles] = useState("absolute mt-5");
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
          setHeaderStyles("absolute mt-5");
        }
      }, 150);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowDropdown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
        className={`w-full container-px group z-50 py-1.5 ${headerStyles} ${
          showDropdown ? "!fixed !bg-transparent !shadow-none mt-5" : ""
        }`}
      >
        <img
          src={
            headerStyles === "fixed-header" && !showDropdown
              ? scholxLogoBlue
              : scholxLogoWhite
          }
          alt="Scholx logo"
          className="w-20 mx-auto sm:w-28 md:hidden"
        />
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center text-white capitalize font-medium group-[.fixed-header]:text-black">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link} className="relative">
                <a
                  className="group-[.fixed-header]:hover:text-french_blue animated-underline"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <img
                src={
                  headerStyles === "fixed-header"
                    ? scholxLogoBlue
                    : scholxLogoWhite
                }
                alt="Scholx logo"
                className="w-28"
              />
            </li>
            {navLinks.slice(2).map((link) => (
              <li key={link} className="relative">
                <a
                  className="group-[.fixed-header]:hover:text-french_blue animated-underline"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          aria-label="menu button"
          type="button"
          className="max-[320px]:right-3 block absolute right-7 top-1/2 -translate-y-1/2 sm:right-12 md:hidden overflow-hidden"
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          {!showDropdown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentcolor"
              className={`text-white size-7 group-[.fixed-header]:text-french_blue ${
                showDropdown ? "!text-white" : ""
              }`}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <img className="w-5" src={closeIcon} alt="close-icon" />
          )}
        </button>
      </motion.header>
      <AnimatePresence>
        {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
      </AnimatePresence>
    </>
  );
};
export default Header;
