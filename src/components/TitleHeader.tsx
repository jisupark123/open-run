import React from 'react';
import styled from 'styled-components';

interface TitleHeaderProps {
  title: string;
  contents?: string;
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`;
const HeaderTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 2.5rem;
  font-weight: 700;
`;
const HeaderContents = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.grayDark};
`;

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, contents }) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderContents>{contents}</HeaderContents>
    </Header>
  );
};
export default TitleHeader;
