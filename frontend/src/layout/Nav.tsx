import React from "react";
import Link from "next/link";

/* Component */
import { AutoImage } from "utils";

const navigation = [
  { name: "문제집", href: "/cbt" },
  { name: "랭킹", href: "/ranking" },
  { name: "포인트상점", href: "/shop" },
  { name: "커뮤니티", href: "/community" },
  { name: "마이페이지", href: "/mypage" },
];

const Nav = () => (
  <header className="bg-white sticky top-0 px-2 sm:px-6 lg:px-8 text-semi-black font-[Pretendard] z-99">
    <div className="max-w-7xl m-auto">
      <div className="relative flex items-center justify-between h-24">
        <div className="flex w-2/12 m-auto">
          <Link href="/">
            <div className="relative w-32 h-5">
              <AutoImage
                className="cursor-pointer"
                alt="logo"
                src="images/logo.png"
              />
            </div>
          </Link>
        </div>
        <nav className="w-8/12 m-auto justify-center items-center flex text-lg font-bold">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <p className="mx-6 text-center hover:text-gray-600 cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
        <div className="flex w-2/12 m-auto text-base items-center justify-center font-semibold">
          <Link href="/login">
            <div className="flex m-auto hover:text-gray-600 cursor-pointer">
              <div className="relative w-6 h-6">
                <AutoImage
                  src="images/ic-login.png"
                  className="h-6 w-6"
                  alt="icon"
                  aria-hidden="true"
                />
              </div>
              <p className="px-3">로그인</p>
            </div>
          </Link>
          <div className="flex m-auto hover:text-gray-600 cursor-pointer">
            <div className="relative w-6 h-6">
              <AutoImage
                src="images/ic-alarm.png"
                className="h-6 w-6 mt-0.5 m-auto"
                alt="icon"
                aria-hidden="true"
              />
            </div>
            <p className="px-3">알림</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export { Nav };
