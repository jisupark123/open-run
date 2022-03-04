import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Slider from '../components/Slider';
import { images } from '../utility';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Introduce = styled.div`
  width: 1000px;
  height: 400px;
  padding: 30px;
  border: 2px solid transparent;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
  @media screen and (max-width: 480px) {
    width: 80%;
    height: 70%;
  }
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.9rem;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`;
const LogoTitle = styled(Title)`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200&family=Noto+Sans+KR:wght@300;400;900&family=Source+Sans+Pro:wght@300;400&display=swap');
  font-family: 'Dancing Script', cursive;
`;
const Contents = styled.div`
  margin-bottom: 50px;
  font-size: 1.3rem;
  line-height: 30px;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default function Intro() {
  return (
    <Container>
      <Slider images={images} />
      <Main>
        <Introduce>
          <Title>오픈런</Title>
          <Contents>
            오픈런은 최근에 생긴 새로운 아르바이트로 명품 한정판 구매 시 줄을
            대신 서주는 것을 뜻합니다.
          </Contents>
          <LogoTitle>Perfect OpenRun</LogoTitle>
          <Contents>
            퍼펙트 오픈런은 대한민국 No.1 오픈런 대행업체입니다.{' '}
            {!isMobile && <br />}
            직접 알바를 고용했던 기존의 방식은 구하는 입장에서 굉장히 번거로울
            뿐더러, 사고가 나는 경우도 많았습니다. 100% 안정성과 신뢰를 추구하는
            퍼펙트 오픈런의 서비스를 이용하면 쉽고 간편하게 한정판 명품을 구매할
            수 있습니다.
          </Contents>
        </Introduce>
      </Main>
    </Container>
  );
}
