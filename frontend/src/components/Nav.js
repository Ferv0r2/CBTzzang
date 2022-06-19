import React from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "CBT", href: "/cbt" },
  { name: "Ranking", href: "/ranking" },
  { name: "Shop", href: "/shop" },
  { name: "Community", href: "/community" },
];

const Nav = () => (
  <header className="max-w-5xl m-auto sticky top-0 px-2 sm:px-6 lg:px-8 font-[GmarketSansBold] z-99">
    <div className="relative flex items-center justify-between h-28 text-neutral-400">
      <Link href="/">
        <div className="flex cursor-pointer">
          <img alt="logo" src="favicon.ico" className="w-12" />
          <p className="block mx-3 m-auto font-bold text-indigo-600 text-3xl">
            CBTzzang
          </p>
        </div>
      </Link>
      <nav className="flex font-bold text-lg text-gray-500 ">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <p className="mx-6 hover:text-gray-900 cursor-pointer">
              {item.name}
            </p>
          </Link>
        ))}

        <Link href="/login">
          <div className="flex w-24 m-auto text-sm items-center text-indigo-500 hover:text-indigo-600 cursor-pointer">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg> */}
            <UserCircleIcon className="h-8 w-8 m-auto" aria-hidden="true" />
            <p>Sign in</p>
          </div>
        </Link>
      </nav>
    </div>
  </header>
);

export default Nav;
