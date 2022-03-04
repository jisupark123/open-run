import styled from 'styled-components';
import { theme } from '../config/theme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 15%; */
  margin-left: 20px;
  color: ${theme.black};
`;
const LogoTitle = styled.div`
  padding-bottom: 15px;
  margin-bottom: 10px;
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200&family=Noto+Sans+KR:wght@300;400;900&family=Source+Sans+Pro:wght@300;400&display=swap');
  font-family: 'Dancing Script', cursive;
  font-size: 1.7rem;
  font-weight: 300;
  border-bottom: 1px solid black;
`;
const LogoSubTitle = styled.div`
  font-size: 0.8rem;
`;

export default function LogoScreen() {
  return (
    <Container>
      <Logo>
        <LogoTitle>Perfect OpenRun</LogoTitle>
        <LogoSubTitle>대한민국 No.1 줄서기 대행</LogoSubTitle>
      </Logo>
    </Container>
  );
}
