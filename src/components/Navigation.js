import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-item");
    for (const navLink of navLinks) {
      navLink.classList.remove("active");
      if (navLink.getAttribute("data-nav-id") === pathname) {
        navLink.classList.add("active");
      }
    }
  }, [pathname]);

  return (
    <nav className="nav">
      <Link to="/" className="nav-item active" data-nav-id="/">
        Home
      </Link>
      <Link to="/about" className="nav-item" data-nav-id="/about">
        About us
      </Link>
    </nav>
  );
};

export default Navigation;
