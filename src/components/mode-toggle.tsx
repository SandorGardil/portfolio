import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

import { ModeSwitch } from "./mode-switch";

interface props {
  className?: string;
}

export function ModeToggle(props: props) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="float-right block mr-6">
      <ModeSwitch
        className={`${props.className} scale-[125%]`}
        onCheckedChange={() => {
          if (theme == "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </ModeSwitch>
    </div>
  );
}
