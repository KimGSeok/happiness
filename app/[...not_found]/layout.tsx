import { PropsWithChildren } from "react";
import { styled } from "styled-system/jsx";

const Layout = ({ children }: PropsWithChildren) => {
  return <ErrorLayout>{children}</ErrorLayout>
};

const ErrorLayout = styled('div', {
  base: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    background: 'url(/default_background.svg) no-repeat center center',
    backgroundSize: 'cover',
  }
})

export default Layout;