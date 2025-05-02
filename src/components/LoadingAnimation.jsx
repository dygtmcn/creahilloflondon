import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    height: 10px;
  }
  50% {
    height: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`;

const Bar = styled.div`
  width: 5px;
  background-color: #1c2022;
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const LoadingAnimation = () => {
  return (
    <Container>
      {Array.from({ length: 9 }).map((_, i) => (
        <Bar key={i} delay={i * 0.1} />
      ))}
    </Container>
  );
};

export default LoadingAnimation;
