import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Warning = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;

export default function NotFound() {
  return (
    <Container>
      <Warning>Page Not Found</Warning>
    </Container>
  );
}
