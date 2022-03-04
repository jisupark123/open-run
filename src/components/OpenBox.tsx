import { LayoutGroup, motion, useAnimation, Variants } from 'framer-motion';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { theme } from '../config/theme';

interface IOpenBoxProps {
  question: JSX.Element | string;
  answer: JSX.Element | string;
}

const QuestionBox = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  color: ${(props) => props.theme.blue};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;
const Question = styled.h3``;
const Arrow = styled(motion.div)`
  position: absolute;
  top: 23px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.gray};
`;
const Answer = styled(motion.div)`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.white};
  line-height: 25px;
  overflow: hidden;
`;

const questionBoxVariants: Variants = {
  initial: {
    backgroundColor: theme.white,
    color: theme.blue,
    marginBottom: 30,
  },
  hover: { backgroundColor: theme.blue, color: theme.white },
  open: { backgroundColor: theme.blue, color: theme.white, marginBottom: 0 },
};
const arrowVariants: Variants = {
  initial: { color: theme.gray, rotate: 0, transformOrigin: 'middle' },
  hover: { color: theme.white },
  open: { color: theme.white, rotate: 180 },
};
const answerVariants: Variants = {
  initial: { display: 'none' },
  open: { display: 'block' },
};

const OpenBox: React.FC<IOpenBoxProps> = ({ question, answer }) => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    if (isOpen) {
      answerAnimation.start('open');
      questionBoxAnimation.start('open');
      arrowAnimation.start('open');
    } else {
      answerAnimation.start('initial');
      questionBoxAnimation.start('initial');
      arrowAnimation.start('initial');
    }
  }, [isOpen]);
  useEffect(() => {
    if (isHover) {
      questionBoxAnimation.start('hover');
      arrowAnimation.start('hover');
    } else {
      if (!isOpen) {
        questionBoxAnimation.start('initial');
        arrowAnimation.start('initial');
      }
    }
  }, [isHover]);
  const questionBoxAnimation = useAnimation();
  const answerAnimation = useAnimation();
  const arrowAnimation = useAnimation();

  return (
    <LayoutGroup>
      <QuestionBox
        layout
        onClick={toggleIsOpen}
        variants={questionBoxVariants}
        animate={questionBoxAnimation}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <Question>{question}</Question>
        <Arrow
          layout
          variants={arrowVariants}
          initial={'initial'}
          animate={arrowAnimation}
        >
          <MdOutlineKeyboardArrowDown />
        </Arrow>
      </QuestionBox>
      <Answer
        layout
        variants={answerVariants}
        initial='initial'
        animate={answerAnimation}
        transition={{ duration: 0.3 }}
      >
        {answer}
      </Answer>
    </LayoutGroup>
  );
};

export default OpenBox;
