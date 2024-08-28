"use client";

import { Fragment, PropsWithChildren, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-system/jsx";

const AppLayout = ({ children }: PropsWithChildren) => {

  const setScreenSize = () =>{
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <Fragment>
      <Header />
        <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
};

const Main = styled("main", {
  base: {
    position: "relative",
    height: "calc(88% - 96px)",
  }
});


export default AppLayout;