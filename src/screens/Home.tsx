import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import Slider from '../components/Slider';
import { theme } from '../config/theme';
import { motion, useAnimation, Variants } from 'framer-motion';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Menus } from '../components/Header';
import { images } from '../utility';

const Container = styled.div`
  width: 100vw;
  /* min-height: 800px; */
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const Welcome = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${window.innerWidth}px;
  height: 200px;
  top: ${200}px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${theme.white};
`;
const WelcomeTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  span {
    margin: 0 5px;
  }
`;
const Strong = styled.div`
  margin: 0 5px;
  font-weight: bold;
`;
const WelcomeContents = styled.h1`
  font-size: 2rem;
`;
const SecondContainer = styled.div<{ bgPhoto: string }>`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
`;
const SecondTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: ${theme.bgColor};
  :last-child {
    font-size: 2rem;
    font-weight: bold;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    :last-child {
      font-size: 1.6rem;
    }
  }
`;
const EffectNumContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin: 0 auto 200px 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const EffectNumTitle = styled.div`
  margin: 0 20px;
  font-size: 2.2rem;
  color: ${theme.bgColor};
  @media screen and (max-width: 480px) {
    margin: 0 10px;
    font-size: 1.4rem;
  }
`;
const EffectNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  color: ${theme.danger};
  font-size: 4rem;
  @media screen and (max-width: 480px) {
    font-size: 2.7rem;
  }
`;
const MoveAnotherPage = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: ${theme.pink};
  div:first-child {
    margin-right: 10px;
    font-size: 2rem;
  }
  :last-child {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 480px) {
    div:first-child {
      font-size: 1.5rem;
    }
    :last-child {
      font-size: 1.8rem;
    }
  }
`;
const ThirdContainer = styled.div<{ bgPhoto: string }>`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;
const ThirdTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-bottom: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${theme.bgColor};
  font-size: 2.3rem;
  span {
    margin-right: 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 250px;
    margin: 0;
    font-size: 1.8rem;
    span {
      margin: 0 0 10px 0;
    }
  }
`;
const ThirdTitleLogo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200&family=Noto+Sans+KR:wght@300;400;900&family=Source+Sans+Pro:wght@300;400&display=swap');
  font-family: 'Dancing Script', cursive;
  color: ${theme.pink};
`;
const Boxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 150px;
  margin: 0 20px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    height: 130px;
    margin-bottom: 30px;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    margin-right: 10px;
    font-size: 1.5rem;
    color: ${theme.black};
  }
`;
const BoxContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 1.2rem;
  font-weight: 500;
`;
const UpOrDown = styled.div<{ direction: 'up' | 'down' }>`
  color: ${(props) =>
    props.direction === 'up' ? props.theme.danger : props.theme.indigo};
  font-size: 1.8rem;
  font-weight: bold;
`;

const effectNumVariants: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Home() {
  const effectNumAnimation = useAnimation();
  return (
    <Container>
      <SliderContainer>
        <Slider images={images} />
        <Welcome>
          <WelcomeTitle>
            <span>줄서기 대행</span> <Strong>No.1 퍼펙트 오픈런</Strong>
          </WelcomeTitle>
          <WelcomeContents>완벽을 추구하다</WelcomeContents>
        </Welcome>
      </SliderContainer>
      <SecondContainer bgPhoto={require('../img/lion.jpg')}>
        <TitleContainer>
          <SecondTitle>리스크 없는 안정성 100% 한정판 구매</SecondTitle>
          <SecondTitle>함께라면 가능합니다.</SecondTitle>
        </TitleContainer>
        <Waypoint
          onEnter={() => effectNumAnimation.start('animate')}
          onLeave={() => effectNumAnimation.start('initial')}
        >
          <EffectNumContainer
            variants={effectNumVariants}
            initial='initial'
            animate={effectNumAnimation}
            transition={{ duration: 0.5 }}
          >
            <EffectNumTitle>누적 서비스 제공 횟수</EffectNumTitle>
            <EffectNum>55</EffectNum>
          </EffectNumContainer>
        </Waypoint>
        <MoveAnotherPage to={Menus[2].url}>
          <div>서비스 이용하기</div>
          <BiRightArrow />
        </MoveAnotherPage>
      </SecondContainer>
      <ThirdContainer bgPhoto={require('../img/background3.jpg')}>
        <ThirdTitle>
          <span>고객과 함께 성장하는</span>
          <ThirdTitleLogo>Perfect OpenRun</ThirdTitleLogo>
        </ThirdTitle>
        <Boxes>
          <Box>
            <BoxTitle>
              <h1>위험도를</h1>
              <UpOrDown direction='down'>Down</UpOrDown>
              <UpOrDown direction='down'></UpOrDown>
            </BoxTitle>
            <BoxContents>사고에 대비해 항시 교체 인력 보유</BoxContents>
          </Box>
          <Box>
            <BoxTitle>
              <h1>만족도를</h1>
              <UpOrDown direction='up'>Up</UpOrDown>
            </BoxTitle>
            <BoxContents>꾸준한 매칭으로 안정적인 수입</BoxContents>
            <BoxContents>(서포터즈)</BoxContents>
          </Box>
          <Box>
            <BoxTitle>
              <h1>신뢰도를</h1>
              <UpOrDown direction='up'>Up</UpOrDown>
            </BoxTitle>
            <BoxContents>서로간의 신뢰로 마음 편한 구매</BoxContents>
          </Box>
        </Boxes>
      </ThirdContainer>
    </Container>
  );
}
