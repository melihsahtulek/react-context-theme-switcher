import "../styles/Switch.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import GetIcon from "./GetIcon";

const Switch = () => {
  const { setTheme } = useContext(ThemeContext);

  const changeTheme = (event) => {
    setTheme(event.target.checked);
  };
  return (
    <label htmlFor="theme-switch-input" className="theme-switch">
      <input type="checkbox" name="theme-switch" id="theme-switch-input" hidden onChange={(e) => changeTheme(e)} />
      <div className="ball"></div>
      <div className="icon">
        <GetIcon icon="BsSunFill" size="18" color="#FFC947" />
      </div>
      <div className="icon">
        <GetIcon icon="BsFillMoonStarsFill" size="18" color="#0A1931" />
      </div>
    </label>
  );
};

export default Switch;
