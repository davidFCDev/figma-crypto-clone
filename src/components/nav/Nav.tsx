import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../../style";
import ScrollToTopLink from "../ScrollToTopLink";

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (path: string) => {
    handleToggle();

    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <nav
      className={`${styles.paddingX} bg-grayscale-500 py-8 w-full flex items-center justify-between text-white fixed screen-path`}
    >
      <Link to="#">
        <img src="/logo.png" alt="logo" className="w-28 small:w-full" />
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

      <button className="bg-blue-gradient p-[1.26px] hidden small:block">
        <div className="flex h-12 w-full items-center justify-center bg-grayscale-500 px-8">
          <span className={`${styles.parraph} text-white`}>Start Now</span>
        </div>
      </button>

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
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-28 small:w-full"
                  />
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
                <Link
                  to="/"
                  className="text-white"
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
                <Link to={"/about"} onClick={() => handleLinkClick("/about")}>
                  About us
                </Link>
                <Link
                  to={"/solution"}
                  onClick={() => handleLinkClick("/solution")}
                >
                  Solution
                </Link>
                <Link
                  to={"/usecases"}
                  onClick={() => handleLinkClick("/usecases")}
                >
                  Use cases
                </Link>
              </ul>

              <button className="bg-blue-gradient p-[1px] w-full">
                <div className="flex h-16 w-full items-center justify-center bg-grayscale-500 px-8">
                  <span className={`${styles.parraph} text-white`}>
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
