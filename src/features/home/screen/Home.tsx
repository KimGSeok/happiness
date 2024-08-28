import { css } from "styled-system/css";

const HomeScreen = () => {
  return (
    <div
      className={css({
        position: 'absolute',
        width: '100%',
        top: '50%',
        transform: 'translateY(-50%)',

        '& div': {
          lineHeight: '1.5',
          fontSize: '1.725rem',
          fontWeight: 600,
          letterSpacing: '2px',

          '2xl': {
            fontSize: '3rem'
          },
          lg: {
            fontSize: '2.5rem'
          },
          md: {
            fontSize: '2rem'
          },
        }
      })}
    >
      <div>LIFE IS IN YOU TODAY</div>
      <div
        className={css({
          position: 'relative',

          _after: {
            position: 'absolute',
            content: '""',
            width: '-webkit-fill-available',
            height: '4px',
            backgroundColor: 'var(--black200)',
            top: '50%',
            transform: 'translateY(-50%)',
            marginLeft: '2%',
            borderRadius: '0.5rem'
          }
        })}
      >CRAFT HAPPINESS:</div>
      <div>FINE HAPPINESS IN YOUR WORK,</div>
    </div>
  )
}

export default HomeScreen;