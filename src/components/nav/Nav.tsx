import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../../style";
import ScrollToTopLink from "../ScrollToTopLink";

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} bg-grayscale-500 py-8 w-full flex items-center justify-between text-white fixed screen-path`}
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

      <aside className="sm:hidden">
        <div className="" onClick={handleToggle}>
          {toggle ? (
            <img src="/open.png" alt="open" />
          ) : (
            <img src="/close.png" alt="close" />
          )}
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className={`${styles.paddingX} bg-grayscale-500 pt-8 pb-20 screen-path absolute top-0 right-0 min-w-full min-h-screen justify-center items-center flex flex-col`}
            >

              <div className="w-full flex items-center justify-between text-white">
                <Link to="#">
                  <img src="/logo.png" alt="logo" />
                </Link>
                <div className="" onClick={handleToggle}>
                  {toggle ? (
                    <img src="/open.png" alt="open" />
                  ) : (
                    <img src="/close.png" alt="close" />
                  )}
                </div>
              </div>

              <ul
                className={`${styles.parraph} list-none flex gap-16 justify-center items-center flex-1 flex-col tracking-widest`}
              >
                <ScrollToTopLink to="/" className="text-white">
                  Home
                </ScrollToTopLink>
                <Link to={"/about"} className="">
                  About us
                </Link>
                <Link to={"/solution"} className="">
                  Solution
                </Link>
                <Link to={"/usecases"} className="">
                  Use cases
                </Link>
              </ul>

              <button className="bg-blue-gradient p-[1.4px] w-full">
                <div className="flex h-20 w-full items-center justify-center bg-grayscale-500 back px-8">
                  <span className="text-base text-white tracking-widest uppercase">
                    Start Now
                  </span>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </nav>
  );
};

export default Nav;
