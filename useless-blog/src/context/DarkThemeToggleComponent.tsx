import { Sun, Moon } from "lucide-react";
import { useTheme } from "./DarkThemeProvider";

export const DarkThemeToggleComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
      )}
    </button>
  );
}