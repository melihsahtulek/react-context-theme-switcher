import Navigation from "./Navigation";
import "../styles/Header.css";
import Switch from "./Switch";

const Header = () => {
  return (
    <div className="header-content">
      <div className="logo">
        <h1>logo.</h1>
      </div>
      <div className="main-nav-container">
        <Navigation />
      </div>
      <Switch />
    </div>
  );
};

export default Header;
