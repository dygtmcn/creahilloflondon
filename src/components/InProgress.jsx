// src/components/InProgress.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Container styled component
const Container = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #1e40af 0%, #ec4899 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Playfair Display', serif;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

// HomeAnimation'daki butonla aynı stil
const StyledButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--primary-blue-light);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

function InProgress() {
  return (
    <Container>
      <Card
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Title>Page Under Construction</Title>
        <Description>
          We're working hard to bring this page to life.
          Please check back soon!
        </Description>

        <StyledButton
          to="/"
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
        >
          Go Back Home
          <svg viewBox="0 0 20 20">
            <path d="M7.05 4.05a.5.5 0 0 1 .7 0l5 5a.5.5 0 0 1 0 .7l-5 5a.5.5 0 0 1-.7-.7L11.29 10 7.05 5.76a.5.5 0 0 1 0-.71z" />
          </svg>
        </StyledButton>
      </Card>
    </Container>
  );
}

export default InProgress;