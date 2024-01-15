"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/"},
    { label: "Portfolio", href: "/portfolio"},
    { label: "Contact", href: "/contact"},
  ];

  return (
    <nav className="flex m-2 bg-stone-800 text-gray-200 border-b-4 border-black h-14 items-center">
      <Link className="w-1/2 pl-12" href="/">
        LOGO
      </Link>
      <ul className="w-1/2 flex justify-evenly">
        {links.map(link => <Link key={link.href}
            href={link.href}
            className={ pathname == link.href ? "text-red-700 hover:text-red-700/60" : "text-gray-200 hover:text-gray-200/60" }
          >
            {link.label}
          </Link>)}
      </ul>
    </nav>
  );
};

export default NavBar;
