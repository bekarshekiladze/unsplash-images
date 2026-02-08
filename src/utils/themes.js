export function isDarkThemePreferred() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";

  return window.matchMedia("(prefers-color-scheme:dark)").matches;
}
