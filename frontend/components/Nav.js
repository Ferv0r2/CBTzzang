import React from "react";
import Link from "next/link";

const Nav = () => (
  <header className="max-w-5xl m-auto sticky top-0 px-2 sm:px-6 lg:px-8 font-[GmarketSansBold] z-99">
    <div className="relative flex items-center justify-between h-28 text-neutral-400 italic">
      <Link href="/">
        <div className="flex cursor-pointer">
          <p className="block mx-3 m-auto font-bold text-3xl">CBT짱</p>
        </div>
      </Link>
    </div>
  </header>
);

export default Nav;
