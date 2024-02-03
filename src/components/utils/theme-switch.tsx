"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg  absolute right-0 p-2"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <span className="text-3xl text-orange-300">🌞</span>
      ) : (
        <span className="text-3xl text-orange-300">🌙</span>
      )}
    </button>
  );
};

export default ThemeButton;
