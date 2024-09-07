"use client"

import { useTheme } from "next-themes"
import { MdSunny, MdNightlight } from "react-icons/md"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col justify-center ml-3">
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="light-switch sr-only"
        checked={theme === "light"}
        onChange={() => {
          if (theme === "dark") {
            return setTheme("light")
          }
          return setTheme("dark")
        }}
      />
      <label className="relative cursor-pointer p-2 border border-gray-300 rounded-full shadow-md dark:border-slate-600" htmlFor="light-switch">
        <MdSunny className="dark:hidden text-yellow-500" />
        <MdNightlight className="hidden dark:block text-indigo-500" />
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  )
}
