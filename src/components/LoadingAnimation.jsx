import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    height: 8px;
    background: linear-gradient(135deg, #64748b, #94a3b8);
  }
  25% {
    height: 24px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
  }
  50% {
    height: 40px;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
  }
  75% {
    height: 24px;
    background: linear-gradient(135deg, #ec4899, #f472b6);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle, 
      rgba(99, 102, 241, 0.1) 0%, 
      rgba(236, 72, 153, 0.05) 50%, 
      transparent 100%
    );
    animation: ${pulse} 2s ease-in-out infinite;
    z-index: -1;
  }
`;

const Bar = styled.div`
  width: 6px;
  border-radius: 3px;
  background: linear-gradient(135deg, #64748b, #94a3b8);
  animation: ${bounce} 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: ${props => props.delay}s;
  position: relative;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: inherit;
    filter: blur(4px);
    opacity: 0.5;
    z-index: -1;
  }
`;

const LoadingText = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
  color: var(--text-secondary, #64748b);
  font-weight: 500;
  letter-spacing: 0.5px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingAnimation = () => {
  return (
    <Container>
      {Array.from({ length: 7 }).map((_, i) => (
        <Bar key={i} delay={i * 0.15} />
      ))}
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
};

export default LoadingAnimation;