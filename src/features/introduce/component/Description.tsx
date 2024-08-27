import { css } from "styled-system/css";

type Props = {
  isActive: boolean;
}

const Description = ({ isActive }: Props) => {
  return (
    <div
      className={css({
        width: '45%',
        backgroundColor: 'var(--white100)',
        height: isActive ? '100%' : 0,
        animation: 'unfold 2s ease forwards'
      })}
    >
      <h1 className={css({ color: 'var(--black100)' })}>Bakamelsks</h1>
      <p>Introduce page</p>
    </div>
  )
}

export default Description;