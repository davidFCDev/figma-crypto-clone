import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../style";
import ScrollToTopLink from "../ScrollToTopLink";
import AsideBar from "./AsideBar";

const Nav: React.FC = () => {
  return (
    <nav
      className={`${styles.paddingX} bg-grayscale-500 py-8 w-full flex items-center justify-between text-white fixed screen-path`}
    >
      <Link to="#">
        <img src="/logo.png" alt="logo" className="w-32 small:w-full" />
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

      <button className="bg-blue-gradient p-[1.21px] hidden small:block">
        <div className="flex h-12 w-full items-center justify-center bg-grayscale-500 hover:bg-grayscale-300 px-8">
          <span className={`${styles.parraph} text-white`}>Start Now</span>
        </div>
      </button>

      <AsideBar />
    </nav>
  );
};

export default Nav;
