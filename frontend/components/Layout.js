import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import Nav from "components/Nav";
// import Footer from "components/Footer";

import { useRecoilState } from "recoil";
import { scrollState, scrollBtnState } from "components/states";

const Layout = ({ children }) => {
  const [scroll, setScroll] = useRecoilState(scrollState);
  const [scrollBtn, setScrollBtn] = useRecoilState(scrollBtnState);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleFollow = () => {
    setScroll(window.pageYOffset);
    if (scroll > 100) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };

  const toUp = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScroll(0);
    setScrollBtn(false);
  };

  return (
    <>
      <Head>
        <title>CBT짱</title>
        <meta
          property="description"
          content="#자격증 #기출문제 #전자문제집 #CBT"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:url" content="https://cbtzzang.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CBTzzang" />
        <meta
          property="og:description"
          content="#자격증 #기출문제 #전자문제집 #CBT"
        />
        <meta
          property="og:image"
          content="https://api.kepler-452b.net/contents.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
      {scrollBtn ? (
        <div className="sticky right-8 bottom-8 ">
          <div className="absolute right-8 bottom-0">
            <div
              className="toUp relative w-14 h-14 cursor-pointer"
              onClick={(e) => toUp()}
            >
              <Image layout="fill" src="/images/onTop.png" />
            </div>
            <p className="text-top_gray text-center text-sm font-[GmarketSansBold]">
              On Top
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Layout;
