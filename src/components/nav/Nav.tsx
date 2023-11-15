import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../../style";
import ScrollToTopLink from "../ScrollToTopLink";
import "../../styles/nav.css";

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} py-8 w-full flex items-center justify-between font-chakra text-white fixed z-50`}
    >
      <Link to="#">
        <img src="/logo.png" alt="logo" />
      </Link>

      <div className="hidden sm:flex text-lg text-gray-300 gap-14">
        <ScrollToTopLink to="/" className="text-white">
          Home
        </ScrollToTopLink>
        <Link to={"/about"} className="hover:text-white">
          About us
        </Link>
        <Link to={"/solution"} className="hover:text-white">
          Solution
        </Link>
        <Link to={"/usecases"} className="hover:text-white">
          Use cases
        </Link>
      </div>

      <button className="bg-blue-gradient p-[1.4px] ">
        <div className="flex h-14 w-full items-center justify-center bg-grayscale-400 back px-5">
          <span className="text-lg text-white">Start Now</span>
        </div>
      </button>

      <aside className="sm:hidden">
        <div id="menuToggle">
          <input id="checkbox" type="checkbox" onClick={handleToggle} />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="px-2 py-20 bg-dimWhite absolute top-[4.4rem] right-[0rem] min-w-[100px] h-screen rounded font-creatoBold uppercase"
            >
              <ul className="list-none flex gap-2 justify-end flex-1 flex-col tracking-widest text-sm">
                <ScrollToTopLink to="/" className="link underline-hover">
                  Home
                </ScrollToTopLink>
                <Link to={"/timetable"} className="link underline-hover">
                  About us
                </Link>
                <Link to={"/prices"} className="link underline-hover">
                  Solution
                </Link>
                <Link to={"/contact"} className="link underline-hover">
                  Use cases
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </nav>
  );
};

export default Nav;
