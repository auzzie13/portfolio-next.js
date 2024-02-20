"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio/list" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mt-2 mx-2 flex bg-stone-800 text-gray-200 h-14 items-center">
      <Link className="w-1/2 pl-12" href="/">
        LOGO
      </Link>
      <ul className="w-1/2 flex justify-evenly">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-red-600": link.href === pathname,
              "hover:text-red-600/60": link.href === pathname,
              "text-gray-200": link.href !== pathname,
              "hover:text-gray-200/60": link.href !== pathname,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
