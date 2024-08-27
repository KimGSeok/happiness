"use client";

import Link from "next/link";
import { capitalizeFirstString } from "src/utils/formatting";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "introduce",
    path: "/introduce",
  },
  {
    label: "history",
    path: "/history",
  },
  {
    label: "portfolio",
    path: "/portfolio",
  }
]

const Footer = () => {

  const pathname = usePathname();

  return (
    <footer
      className={css({
        height: 'calc(3rem + 48px)',
        padding: {
          base: '0 0 48px 0',
          '2xl': '0 0 48px 0',
          xl: '0 0 48px 0',
          lg: '0 0 48px 0',
          md: '0 0 48px 0',
          sm: '0',
        }
      })}
    >
      <ul className={flex({ alignItems: 'center' })}>
        {routes.map(({ label, path }) => {
          return (
            <Link key={path} href={path} passHref>
              <li
                className={css({
                  margin: '0 3rem 0 0',
                  color: pathname === path ? 'var(--white100)' : 'var(--black500)',
                })}
              >{capitalizeFirstString(label)}</li>
            </Link>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer;