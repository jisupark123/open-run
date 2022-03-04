import styled from 'styled-components';
import { theme } from '../config/theme';

const FooterContainer = styled.div`
  width: 100vw;
  height: 150px;
  padding: 50px 20px;
  background-color: ${theme.black};
  color: ${theme.bgColor};
  border-top: 1px solid ${theme.gray};
  font-size: 0.7rem;
`;
const Row = styled.div`
  margin-bottom: 7px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Row>대표: 이준호</Row>
      <Row>사업자번호: 301-88-01666</Row>
      <Row>주소: 서울시 마포구 양화로 8길 17-28, 6층 141호</Row>
    </FooterContainer>
  );
}
