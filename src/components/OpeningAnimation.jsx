import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../images/background.png";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, 
    rgba(30, 41, 59, 0.95) 0%, 
    rgba(51, 65, 85, 0.9) 50%, 
    rgba(15, 23, 42, 0.95) 100%
  ), url(${bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  z-index: 2000;
  animation: ${(props) => (props.fadeOut ? fadeOut : "none")} 1s ease-out forwards;
  padding-top: 9vh;
  
  /* Overlay pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  height: calc(100vh - 9vh);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 12vw, 10rem);
  margin: 0;
  opacity: 0;
  font-weight: 800;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e2e8f0 25%,
    #6366f1 50%,
    #ec4899 75%,
    #ffffff 100%
  );
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${slideInLeft} 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards,
             ${shimmer} 3s linear infinite;
  animation-delay: 0.5s, 2s;
  letter-spacing: -0.02em;
  position: relative;
  
  /* Glow effect */
  &::after {
    content: 'Creahill';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(30px);
    opacity: 0.6;
    z-index: -1;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-top: 1.5rem;
  opacity: 0;
  color: #f1f5f9;
  font-weight: 300;
  letter-spacing: 8px;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  animation: ${slideInTop} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 1.2s;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ec4899, transparent);
    opacity: 0;
    animation: ${slideInTop} 0.8s ease-out forwards;
    animation-delay: 2s;
  }

  @media (max-width: 768px) {
    letter-spacing: 4px;
    margin-top: 1rem;
  }
`;

const Tagline = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-top: 2rem;
  opacity: 0;
  color: #cbd5e1;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  animation: ${slideInTop} 1s ease-out forwards;
  animation-delay: 2.5s;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const LoadingBar = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    border-radius: 2px;
    animation: loading 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.8s;
  }
  
  @keyframes loading {
    to {
      left: 0;
    }
  }

  @media (max-width: 768px) {
    width: 150px;
    bottom: 3rem;
  }
`;

const OpeningAnimation = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 3200);
    const timer2 = setTimeout(() => onFinish(), 4200);
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
          <Tagline>Where Stories Meet Sound</Tagline>
        </TitleBox>
        <LoadingBar />
      </Content>
    </Container>
  );
};

export default OpeningAnimation;