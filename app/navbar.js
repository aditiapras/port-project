"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { useState, useEffect } from "react";
import logo from "../public/A.svg";
import logos from "../public/A1.svg";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="fixed top-0 flex w-full justify-center py-2">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.js</code>
          </p> */}
          <Link href="#">
            {theme == "dark" ? (
              <Image src={logo}></Image>
            ) : (
              <Image src={logos}></Image>
            )}
          </Link>
          <button
            className="border p-3 rounded-xl hover:border-zinc-400 text-xl"
            onClick={() => {
              setTheme(theme == "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? (
              <code className="flex gap-2">
                {" "}
                <HiSun></HiSun>
                <p className="text-sm">LightMode</p>
              </code>
            ) : (
              <code className="flex gap-2">
                {" "}
                <HiMoon></HiMoon>
                <p className="text-sm">DarkMode</p>
              </code>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
