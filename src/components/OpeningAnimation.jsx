import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../images/background.png";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  color: white;
  z-index: 2000;
  animation: ${(props) => (props.fadeOut ? fadeOut : "none")} 0.8s ease forwards;
  padding-top: 9vh; /* header yüksekliği kadar boşluk */
`;

const Content = styled.div`
  height: calc(100vh - 9vh);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    justify-content: center;
    text-align: center;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  opacity: 0;
  animation: ${slideInLeft} 1s ease forwards;
  animation-delay: 0.3s;
`;

const Subtitle = styled.h2`
  font-size: 3rem;
  margin-top: 20px;
  opacity: 0;
  color: #ffffff;
  animation: ${slideInTop} 1s ease forwards;
  animation-delay: 1s;
`;

const OpeningAnimation = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2500);
    const timer2 = setTimeout(() => onFinish(), 3300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <Container fadeOut={fadeOut}>
      <Content>
        <TitleBox>
          <Title>Creahill</Title>
          <Subtitle>of London</Subtitle>
        </TitleBox>
      </Content>
    </Container>
  );
};

export default OpeningAnimation;
