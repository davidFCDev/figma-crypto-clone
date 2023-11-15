import { styles } from "../../style";
import { Link } from "react-router-dom";
import ScrollToTopLink from "../ScrollToTopLink";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} font-chakra flex flex-col gap-20 pt-40 pb-20 w-full screen-path-bottom`}
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between items-start">
          <img src="/logo.png" alt="logo" />
          <div className="flex gap-4">
            <a href="#">
              <img src="/x-icon.png" alt="x-icon" className="hover:scale-105" />
            </a>
            <a href="#">
              <img
                src="/fb-icon.png"
                alt="fb-icon"
                className="hover:scale-105"
              />
            </a>
            <a href="#">
              <img
                src="/ig-icon.png"
                alt="ig-icon"
                className="hover:scale-105"
              />
            </a>
            <a href="#">
              <img
                src="/github-icon.png"
                alt="github-icon"
                className="hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div className={`${styles.parraph} flex w-[70%] justify-around`}>
          <div className="flex flex-col gap-5">
            <p className="text-white font-semibold">Quicklinks</p>
            <ScrollToTopLink to={"/"} className="hover:text-white">
              Inicio
            </ScrollToTopLink>
            <Link to="/solution" className="hover:text-white">
              Solution
            </Link>
            <Link to="/usecases" className="hover:text-white">
              Use Cases
            </Link>
            <a href="#" className="hover:text-white">
              Whitepaper
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-semibold">Support</p>
            <Link to="/about" className="hover:text-white">
              About us
            </Link>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <Link to="/" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-semibold">Need Help?</p>
            <p className="flex gap-2 items-center">
              <img src="/location-icon.png" alt="location-icon" />
              1901 Thornridge Cir. Shiloh, Hawaii
            </p>
            <p className="flex gap-2 items-center">
              <img src="/mail-icon.png" alt="email-icon" />
              support@lockpay.com
            </p>
            <p className="flex gap-2 items-center">
              <img src="/phone-icon.png" alt="phone-icon" />
              +1 808-123-1234
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <img src="/public/line.png" alt="line gradient" />

        <p className={`${styles.parraph} text-center`}>
          © 2021 LockPay. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
