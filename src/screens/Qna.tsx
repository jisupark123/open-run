import React from 'react';
import styled from 'styled-components';
import OpenBox from '../components/OpenBox';
import TitleHeader from '../components/TitleHeader';

const Container = styled.div`
  width: 100%;
  height: 150vh;
`;
const QnaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-width: 300px;
  margin: 70px auto;
`;

export default function Qna() {
  return (
    <Container>
      <TitleHeader title={'Q&A'} contents='자주하는 질문' />
      <QnaContainer>
        {/* {[0, 1, 2].map((i) => (
          <OpenBox key={i} index={i} />
        ))} */}
        <OpenBox
          question={<span>실력이 늘어서 레벨을 바꾸고 싶어요.</span>}
          answer={
            <div>
              한달마다 선생님이 여러분의 실력을 체크해서 레벨을 재측정합니다.
              <br />
              혹시 평가가 마음에 들지 않는다면 언제든지 문의주세요!
            </div>
          }
        />
        <OpenBox
          question={'실력이 늘어서 레벨을 바꾸고 싶어요'}
          answer={
            <div>
              한달마다 선생님이 여러분의 실력을 체크해서 레벨을 재측정합니다.
              <br />
              혹시 평가가 마음에 들지 않는다면 언제든지 문의주세요!
            </div>
          }
        />
        <OpenBox
          question={'실력이 늘어서 레벨을 바꾸고 싶어요'}
          answer={
            <div>
              한달마다 선생님이 여러분의 실력을 체크해서 레벨을 재측정합니다.
              <br />
              혹시 평가가 마음에 들지 않는다면 언제든지 문의주세요!
            </div>
          }
        />
        <OpenBox
          question={'실력이 늘어서 레벨을 바꾸고 싶어요'}
          answer={
            <div>
              한달마다 선생님이 여러분의 실력을 체크해서 레벨을 재측정합니다.
              <br />
              혹시 평가가 마음에 들지 않는다면 언제든지 문의주세요!
            </div>
          }
        />
        <OpenBox
          question={'실력이 늘어서 레벨을 바꾸고 싶어요'}
          answer={
            <div>
              한달마다 선생님이 여러분의 실력을 체크해서 레벨을 재측정합니다.
              <br />
              혹시 평가가 마음에 들지 않는다면 언제든지 문의주세요!
            </div>
          }
        />
      </QnaContainer>
    </Container>
  );
}
