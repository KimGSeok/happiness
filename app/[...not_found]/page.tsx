import { styled } from "styled-system/jsx"

export default async function NotFound() {
  return (
    <Container>
      <h2>페이지를 준비중입니다.</h2>
    </Container>
  )
};

const Container = styled('div', {
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
})