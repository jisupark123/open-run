import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { theme } from '../config/theme';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useState } from 'react';

const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 350px;
  @media screen and (max-width: 480px) {
    bottom: 20px;
    right: 0px;
    width: 150px;
    height: 250px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 70%;
    margin: 0 20px 0 auto;
  }
`;
const Icon = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: 0 10px;
  font-size: 3rem;
  border-radius: 50px;
  cursor: pointer;
  :first-child {
    background-color: #ffc312;
    color: black;
  }
  :last-child {
    background: linear-gradient(
        336deg,
        rgba(255, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(227deg, rgba(255, 0, 234, 0.8), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(127deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    color: ${theme.bgColor};
  }
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin: 10px 0;
    font-size: 2.3rem;
  }
`;
const ApplyBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: ${theme.black};
  color: ${theme.pink};
  border: 2px solid ${theme.pink};
  border-radius: 50px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 120px;
  }
`;

const kakaoVariants: Variants = isMobile
  ? {
      hidden: { scale: 0, y: 130, x: -20 },
      visible: { scale: 1, y: 0, x: 0 },
    }
  : {
      hidden: { scale: 0, y: 100, x: 50 },
      visible: { scale: 1, y: 0, x: 0 },
    };
const instaVariants: Variants = isMobile
  ? { hidden: { scale: 0, y: 80, x: -20 }, visible: { scale: 1, y: 0, x: 0 } }
  : {
      hidden: { scale: 0, y: 100, x: -50 },
      visible: { scale: 1, y: 0, x: 0 },
    };

export default function FloatingApply() {
  const [clicked, setClicked] = useState(false);
  const kakaoAnimation = useAnimation();
  const instaAnimation = useAnimation();
  const handleClickBtn = () => {
    if (clicked) {
      kakaoAnimation.start('hidden');
      instaAnimation.start('hidden');
    } else {
      kakaoAnimation.start('visible');
      instaAnimation.start('visible');
    }
    setClicked((prev) => !prev);
  };
  return (
    <Container>
      <Icons>
        <Icon
          href='http://pf.kakao.com/_JxfCxib'
          target='_blank'
          variants={kakaoVariants}
          initial='hidden'
          animate={kakaoAnimation}
        >
          <RiKakaoTalkFill />
        </Icon>
        <Icon
          href='#'
          variants={instaVariants}
          initial='hidden'
          animate={instaAnimation}
        >
          <AiOutlineInstagram />
        </Icon>
      </Icons>
      <ApplyBtn onClick={handleClickBtn}>
        {clicked ? '숨기기' : '문의하기'}
      </ApplyBtn>
    </Container>
  );
}
