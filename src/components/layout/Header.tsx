"use client";

import Image from "next/image";
import { css } from "styled-system/css";

const Header = () => {
  return (
    <header
      className={css({
        height: 'calc(3rem + 48px)',
        padding: {
          base: '48px 0 0 0',
          '2xl': '48px 0 0 0',
          xl: '48px 0 0 0',
          lg: '48px 0 0 0',
          md: '48px 0 0 0',
          sm: '0',
        }
      })}
    >
      <Image
        src="/logos/white_logo.svg"
        alt="logo"
        width={100}
        height={100}
      />
    </header>
  )
}

export default Header;