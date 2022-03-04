import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import styled from 'styled-components';
import { theme } from '../config/theme';

interface ISliderProps {
  images: { url: string }[];
}

const Slide = styled(SimpleImageSlider)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.white};
  font-size: 5rem;
  @media screen and (max-width: 480px) {
    min-height: 1000px;
  }
`;

const Slider: React.FC<ISliderProps> = ({ images }) => {
  return (
    <Slide
      width={window.innerWidth}
      height={'100%'}
      images={images}
      showBullets={false}
      showNavs={false}
      autoPlay
      autoPlayDelay={2}
      slideDuration={0.5}
    ></Slide>
  );
};

export default Slider;
