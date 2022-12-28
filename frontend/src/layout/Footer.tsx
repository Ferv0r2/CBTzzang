import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="max-w-7xl m-auto py-[60px]">
        <Link href="/">
          <p className="w-[144px] cursor-pointer text-[28px] font-[Play] font-bold">
            CBTZZANG
          </p>
        </Link>
        <div className="py-[32px] text-sm text-[rgba(255,255,255,0.5)]">
          <address className="not-italic">
            주소 : 경기도 성남시 중원구 광명로 337 (신구대학)
          </address>
          <em className="not-italic">E-mail : codingpa17@gmail.com</em>
        </div>
        <div className="text-xs text-[rgba(255,255,255,0.2)]">
          <p>COPYRIGHT &copy; 2022. CBTZZANG. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
