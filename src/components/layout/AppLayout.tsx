import { Fragment, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-system/jsx";

const AppLayout = ({ children }: PropsWithChildren) => {
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
    height: "calc(100vh - 96px - 6rem)",
  }
});


export default AppLayout;