import { styled } from "styled-system/jsx";
import { THistory } from "../type/history.type";
import { css } from "styled-system/css";
import Link from "next/link";
import { flex } from "styled-system/patterns";

type Props = THistory

const HistoryItem = ({ startDate, endDate, title, contents, link }: Props) => {
  return (
    <Container>
      <div className={flex({ alignItems: 'center', gap: '16px', margin: '0 0 8px 0' })}>
        <Link
          href={link}
          passHref
          className={css({ fontWeight: 600 })}
        >{title}
        </Link>
        <div className={css({ color: 'var(--black700)', fontWeight: 400 })}>{startDate} - {endDate}</div>
      </div>
      {contents.map((content) => {
        return (
          <p
            key={content}
            className={css({
              color: 'var(--black600)'
            })}
          >{content}</p>
        )
      })}
    </Container>
  )
};

const Container = styled('li', {
  base: {
    margin: '0 0 3vw 2vw',
    backgroundColor: 'var(--black200)',
    borderRadius: '1rem',
    padding: '1vw 1.5vw'
  }
})

export default HistoryItem;