import styled from 'styled-components';
import { navHeight } from '../components/Header';
import { isMobile } from 'react-device-detect';
import { theme } from '../config/theme';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import React, { useEffect, useState } from 'react';
import { images, numberWithCommas } from '../utility';
import Slider from '../components/Slider';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 480px) {
    min-height: 700px;
  }
`;
const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: ${navHeight + 30}px;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 480px) {
    min-height: 700px;
  }
`;
const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Notice = styled.div`
  width: 50%;
  height: 200px;
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid transparent;
  border-radius: 5px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
const PaddingContainer = styled.div`
  height: 100%;
  padding: 15px;
`;
const NoticeTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.6rem;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const NoticeContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const NoticeNum = styled.div`
  margin-right: 5px;
  color: ${theme.indigo};
`;
const NoticeContent = styled.div`
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 20px;
  }
`;
const CalculatorContainer = styled.div`
  width: 50%;
  height: 300px;
  margin: 10px auto;
  border: 2px solid transparent;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
  background-origin: border-box;
  background-clip: content-box, border-box;
  @media screen and (max-width: 480px) {
    width: 90%;
    height: 350px;
  }
`;
const CalculatorTitle = styled(NoticeTitle)`
  margin-bottom: 10px;
`;
const CalculatorSubTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  line-height: 20px;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const Calculator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 0 50px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 30px;
    padding: 0 10px;
  }
`;
const Inputs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 480px) {
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
  }
`;
const Input = styled.input`
  all: unset;
  text-align: center;
  width: 150px;
  margin-right: 10px;
  padding: 5px;
  border-bottom: 1px solid ${theme.indigo};
  font-size: 1.3rem;
  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;
const InputError = styled.div`
  position: absolute;
  bottom: -10px;
  left: -45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  color: ${theme.danger};
  font-size: 0.8rem;
  @media screen and (max-width: 480px) {
    bottom: 0;
    font-size: 0.7rem;
  }
`;
const Time = styled.div`
  margin-right: 10px;
  font-size: 1.5rem;
`;
const ChooseTime = styled.div`
  display: flex;
  align-items: center;
`;
const Minutes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 80px;
  margin: 0 10px;
  border: 2px solid ${theme.indigo};
  border-radius: 10px;
  font-size: 1.7rem;
`;
const Minute = styled.div<{ selected: boolean }>`
  opacity: ${(props) => (props.selected ? 1 : 0.3)};
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  cursor: pointer;
`;
const Result = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  padding-bottom: 10px;
  border: 2px solid ${theme.indigo};
  border-radius: 10px;
  font-size: 2rem;
`;
const Price = styled.div`
  margin: 0 2px;
`;
const Won = styled.div`
  margin: 0 2px;
`;
const Average = styled.div`
  position: absolute;
  bottom: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

const minPrice = 50000;

export default function Survice() {
  const [hour, setHour] = useState<number | null>(2);
  const [minute, setMinute] = useState(30);
  const [price, setPrice] = useState(50000);
  const [average, setAverage] = useState<number | null>(20000);
  const [error, setError] = useState<'minTime' | 'maxTime' | 'blank' | null>(
    null
  );
  useEffect(() => {
    if (!hour) {
      setError('blank');
      setPrice(0);
      setAverage(null);
      return;
    }
    const decimal = minute === 0 ? 0 : 0.5;
    if (hour + decimal > 23.5) {
      setError('maxTime');
      setPrice(0);
      setAverage(null);
      return;
    } else if (hour + decimal < 2.5) {
      setError('minTime');
      setPrice(0);
      setAverage(null);
      return;
    }
    const newPrice = minPrice + 15000 * (hour + decimal - 2.5);
    const newAverage = Math.round(newPrice / (hour + decimal));
    setPrice(newPrice);
    setAverage(newAverage);
    setError(null);
  }, [minute, hour]);
  const handleValue = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(event.currentTarget.value);
    setHour(newValue);
  };
  return (
    <Container>
      <Slider images={images} />
      <Main>
        <CalculatorContainer>
          <PaddingContainer>
            <CalculatorTitle>스마트 계산기</CalculatorTitle>
            <CalculatorSubTitle>
              간편하게 금액을 계산하세요 {isMobile && <br />}(최소 가능 시간은
              2시간 30분부터입니다.)
            </CalculatorSubTitle>
            <Calculator>
              <Inputs>
                <Input
                  type='number'
                  onChange={handleValue}
                  value={hour || ''}
                />
                <Time>시간</Time>
                <ChooseTime>
                  <Minutes>
                    <Minute
                      selected={minute === 0}
                      onClick={() => setMinute(0)}
                    >
                      00
                    </Minute>
                    <Minute
                      selected={minute === 30}
                      onClick={() => setMinute(30)}
                    >
                      30
                    </Minute>
                  </Minutes>
                  <Time>분</Time>
                </ChooseTime>
                <InputError>
                  {error === 'blank'
                    ? '시간을 입력하세요'
                    : error === 'minTime'
                    ? '최소 시간은 2시간 30분입니다.'
                    : error === 'maxTime'
                    ? '최대 시간은 23시간 30분입니다.'
                    : ''}
                </InputError>
              </Inputs>
              <Result>
                <Price>{numberWithCommas(price)}</Price>
                <Won>원</Won>
                {average && (
                  <Average>평균 시급: {numberWithCommas(average)}원</Average>
                )}
              </Result>
            </Calculator>
          </PaddingContainer>
        </CalculatorContainer>
        <NoticeContainer>
          <Notice>
            <PaddingContainer>
              <NoticeTitle>서비스 이용 방법</NoticeTitle>
              <NoticeContents>
                <NoticeNum>
                  <RiNumber1 />
                </NoticeNum>
                <NoticeContent>
                  금액 계산 후 카톡 플러스 친구로 문의
                </NoticeContent>
              </NoticeContents>
              <NoticeContents>
                <NoticeNum>
                  <RiNumber2 />
                </NoticeNum>
                <NoticeContent>
                  구매 정보 입력하시면 순차적으로 안내해드립니다. (자세한 내용은
                  카톡 채널에서)
                </NoticeContent>
              </NoticeContents>
              <NoticeContents>
                <NoticeNum>
                  <RiNumber3 />
                </NoticeNum>
                <NoticeContent>
                  서비스 비용 100% 입금 후 예약 확정입니다.
                </NoticeContent>
              </NoticeContents>
            </PaddingContainer>
          </Notice>
        </NoticeContainer>
      </Main>
    </Container>
  );
}
