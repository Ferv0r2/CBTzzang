import React, { useEffect, ReactNode, FC } from "react";

/* Layout */
import { SEO, Nav, Footer, ScrollTop } from "layout";

/* State */
import { useRecoilState } from "recoil";
import { scrollState, scrollBtnState } from "stores";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [scroll, setScroll] = useRecoilState(scrollState);
  const [scrollActive, setScrollActive] = useRecoilState(scrollBtnState);

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
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  return (
    <>
      <SEO />
      <Nav />
      <main>{children}</main>
      <Footer />
      {scrollActive ? <ScrollTop active={scrollActive} /> : ""}
    </>
  );
};

export default Layout;
