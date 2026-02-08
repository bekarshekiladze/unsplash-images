import { IoSunny, IoMoon } from "react-icons/io5";
import { useGlobalContext } from "../Context";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

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
