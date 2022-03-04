import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../config/theme';

export const Menus = [
  { name: 'Home', url: '/' },
  { name: '소개', url: '/intro' },
  { name: '이용 안내', url: '/survice' },
];

export const navHeight = isMobile ? 80 : 100;

const Nav = styled(motion.nav)`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  height: ${navHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
`;
const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  color: ${theme.black};
`;
const LogoTitle = styled(motion.div)`
  margin-bottom: 10px;
  padding-bottom: 15px;
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200&family=Noto+Sans+KR:wght@300;400;900&family=Source+Sans+Pro:wght@300;400&display=swap');
  font-family: 'Dancing Script', cursive;
  font-size: 1.7rem;
  font-weight: 300;
  border-bottom: 1px solid black;
  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
    font-size: 1rem;
  }
`;
const LogoSubTitle = styled.div`
  font-size: 0.8rem;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const Menu = styled(motion.ul)`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 60%;
    padding: 0 15px;
  }
`;
const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const Undelline = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  width: 130px;
  height: 2px;
  @media screen and (max-width: 480px) {
    bottom: 10px;
    width: 60px;
  }
`;

const navVariants: Variants = {
  top: { backgroundColor: 'rgba(0,0,0,0)' },
  scroll: { backgroundColor: 'rgba(0,0,0,1)' },
};

const logoVariants: Variants = {
  top: { color: theme.black },
  scroll: { color: theme.pink },
};
const logoTitleVariants: Variants = {
  top: { borderColor: theme.black },
  scroll: { borderColor: theme.pink },
};
const menuVariants: Variants = {
  top: { color: theme.pink },
  scroll: { color: theme.textColor },
};
const underlineVariants: Variants = {
  top: { backgroundColor: theme.pink },
  scroll: { backgroundColor: theme.textColor },
};

export default function Header() {
  const { scrollY } = useViewportScroll();
  const { pathname } = useLocation();
  const navAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const logoTitleAnimation = useAnimation();
  const menuAnimation = useAnimation();
  const underlineAnimation = useAnimation();

  scrollY.onChange(() => {
    if (scrollY.get() <= navHeight) {
      navAnimation.start('top');
      logoAnimation.start('top');
      logoTitleAnimation.start('top');
      menuAnimation.start('top');
      underlineAnimation.start('top');
    } else {
      navAnimation.start('scroll');
      logoAnimation.start('scroll');
      logoTitleAnimation.start('scroll');
      menuAnimation.start('scroll');
      underlineAnimation.start('scroll');
    }
  });

  return (
    <Nav variants={navVariants} initial='top' animate={navAnimation}>
      <Link to='/'>
        <Logo variants={logoVariants} initial='top' animate={logoAnimation}>
          <LogoTitle
            variants={logoTitleVariants}
            initial='top'
            animate={logoTitleAnimation}
          >
            Perfect OpenRun
          </LogoTitle>
          <LogoSubTitle>대한민국 No.1 줄서기 대행</LogoSubTitle>
        </Logo>
      </Link>
      <Menu variants={menuVariants} initial='top' animate={menuAnimation}>
        <Item>
          <Link to={Menus[0].url}>
            <Title>{Menus[0].name}</Title>
          </Link>
          {pathname === Menus[0].url && (
            <Undelline
              variants={underlineVariants}
              initial='top'
              animate={underlineAnimation}
              layoutId='underline'
            />
          )}
        </Item>
        <Item>
          <Link to={Menus[1].url}>
            <Title>{Menus[1].name}</Title>
          </Link>
          {pathname === Menus[1].url && (
            <Undelline
              variants={underlineVariants}
              initial='top'
              animate={underlineAnimation}
              layoutId='underline'
            />
          )}
        </Item>
        <Item>
          <Link to={Menus[2].url}>
            <Title>{Menus[2].name}</Title>
          </Link>
          {pathname === Menus[2].url && (
            <Undelline
              variants={underlineVariants}
              initial='top'
              animate={underlineAnimation}
              layoutId='underline'
            />
          )}
        </Item>
      </Menu>
    </Nav>
  );
}
