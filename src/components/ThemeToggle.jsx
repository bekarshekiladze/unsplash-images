import { IoSunny, IoMoon } from "react-icons/io5";
import { useThemeContext } from "../Context/ThemeContext";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useThemeContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoSunny className="toggle-icon" />
        ) : (
          <IoMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
export default ThemeToggle;
