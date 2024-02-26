import * as React from "react";
import Link from "next/link";
import ThemeSwitch from "./ui/theme-switch";

export function Header() {
  return (
    <header className="w-full flex items-center">
      <div className="w-1/2">
        <Link href="/">
          <h1 className="text-bold text-2xl">uPost</h1>
        </Link>
      </div>
      <div className="w-1/2 text-right">
        <ThemeSwitch />
      </div>
    </header>
  );
}
