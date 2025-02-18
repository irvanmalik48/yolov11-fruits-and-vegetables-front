import { useTheme } from "next-themes";
import { Moon, Sun, SunMoon } from "lucide-react";
import ArienneLogo from "../svg/arienne-logo";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full border-b border-border px-5 py-3">
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <ArienneLogo className="w-8 h-8" />
          <div className="flex flex-col line-clamp-1">
            <h1 className="w-full text-xl font-medium">Project Arienne</h1>
            <p className="w-full text-xs text-muted-foreground line-clamp-1">
              YOLOv11 Fruits & Vegetables Classification
            </p>
          </div>
        </div>
        <button
          className="p-2 border-border bg-background rounded-full hover:bg-secondary transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunMoon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
