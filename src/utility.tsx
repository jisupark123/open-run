import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export const HandleUrlChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setScreenSize();
  }, [pathname]);
  return null;
};

export const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const images = isMobile
  ? [
      { url: require('./img/m-background0.png') },
      { url: require('./img/m-background1.png') },
      { url: require('./img/m-background2.png') },
    ]
  : [
      { url: require('./img/background0.jpg') },
      { url: require('./img/background1.jpg') },
      { url: require('./img/background2.jpg') },
    ];
