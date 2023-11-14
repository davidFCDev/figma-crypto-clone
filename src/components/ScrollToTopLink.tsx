import React, { MouseEvent } from 'react';
import { Link, LinkProps, useLocation, useNavigate } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  // Puedes agregar otras propiedades personalizadas si es necesario
  className?: string;
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ to, className, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === to) {
      scrollToTop();
    } else {
      navigate(to);
    }
  };

  return (
    <Link to={to} className={`link underline-hover ${className}`} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;



