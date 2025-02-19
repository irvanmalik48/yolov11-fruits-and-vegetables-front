import { useTheme } from "next-themes";
import { Info, Menu, SunMoon } from "lucide-react";
import ArienneLogo from "../svg/arienne-logo";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 bg-background/50 backdrop-blur-lg z-[999] w-full border-b border-border">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto px-5 py-3 border-x border-border">
        <div className="flex items-center gap-3">
          <ArienneLogo className="w-8 h-8" />
          <div className="flex flex-col line-clamp-1">
            <h1 className="w-full text-xl font-medium">Project Arienne</h1>
            <p className="w-full text-xs text-muted-foreground line-clamp-1">
              YOLOv11 Fruits & Vegetables Classification
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="p-2 border-border bg-background rounded-full hover:bg-secondary transition-colors"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <SunMoon className="w-6 h-6" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Toggle {theme === "dark" ? "Light" : "Dark"} Mode
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="p-2 border-border bg-background rounded-full hover:bg-secondary transition-colors"
                  href="/about"
                >
                  <Info className="w-6 h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>About Project Arienne</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
