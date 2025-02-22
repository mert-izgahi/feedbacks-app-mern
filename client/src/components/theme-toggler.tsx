import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "../providers/theme-provider";
import { Button } from "./shared/button";

function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button size={"icon"} variant={"ghost"} type="button" onClick={toggleTheme}>
            {theme === "light" ? <LuMoon /> : <LuSun />}
        </Button>
    )
}

export default ThemeToggler