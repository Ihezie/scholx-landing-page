import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { navLinks } from "../data";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header className="absolute w-full top-12 container-px z-50">
        <div className="logo mx-auto w-max md:hidden">SCHOLX</div>
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center text-white capitalize font-medium">
            {navLinks.slice(0, 2).map((link) => (
              <li className="relative animated-underline">
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
            <li className="logo">SCHOLX</li>
            {navLinks.slice(2).map((link) => (
              <li className="relative animated-underline">
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="xs:right-3 block absolute right-7 top-1/2 -translate-y-1/2 text-[28px] sm:right-12 md:hidden"
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          {showDropdown ? (
            <FontAwesomeIcon icon={faClose} color="white" />
          ) : (
            <FontAwesomeIcon icon={faBars} color="white" />
          )}
        </button>
      </header>
      <AnimatePresence>
        {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
      </AnimatePresence>
    </>
  );
};
export default Header;

// Give Header white background when user scrolls past a certain point.
