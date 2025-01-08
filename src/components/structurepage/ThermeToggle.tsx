import { useTheme } from "@/hooks/useTheme";
import { IconMoon, IconSun } from "@tabler/icons-react";


const ThermeToggle = () => {

    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
      const newTheme = theme === "garden" ? "dark" : "garden";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme); 
    };
    
    return (
        <div>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            {/* Sun */}
            <IconSun stroke={2} className="swap-off h-10 w-10 fill-current text-orange-400"/>
            
            {/* Moon */}
            <IconMoon stroke={2} className="swap-on h-10 w-10 fill-current text-warning  text-3xl"/>
          </label>
        </div>
      );
}

export default ThermeToggle