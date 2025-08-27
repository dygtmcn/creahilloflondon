// src/components/HomeAnimation.jsx
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 90vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  color: var(--text-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 2rem;
    text-align: center;
    min-height: 100vh;
    justify-content: center;
  }
`;

const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    align-items: center;
    margin-bottom: 3rem;
  }
`;

const RightColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    align-items: center;
    max-width: 100%;
    text-align: center;
  }
`;

const Creahill = styled(motion.h1)`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 800;
  margin: 0;
  color: #1e293b;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.02em;
  position: relative;
  background: linear-gradient(135deg, #1e40af 0%, #1e293b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const OfLondon = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  margin: 1rem 0 0 0;
  color: #64748b;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  position: relative;
`;

const MainText = styled(motion.div)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: left;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: #1e293b;
  font-family: 'Playfair Display', serif;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const SubText = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  margin-bottom: 1.5rem;
  text-align: left;
  line-height: 1.7;
  max-width: 540px;
  color: #475569;
  font-weight: 400;

  @media (max-width: 1024px) {
    text-align: center;
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

const ReadMore = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--primary-blue-light);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--radius-lg);
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

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  border-radius: 50%;
  background: rgba(236, 72, 153, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(236, 72, 153, 0.2);
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '10%'};
  right: ${props => props.right || 'auto'};
  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const floatingVariants = {
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HomeAnimation() {
  return (
    <Container>
      <FloatingElement
        size="70px"
        top="20%"
        right="8%"
        variants={floatingVariants}
        animate="animate"
      />

      <FloatingElement
        size="90px"
        top="80%"
        left="80%"
        variants={floatingVariants}
        animate="animate"
      />

      <FloatingElement
        size="120px"
        top="70%"
        left="5%"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }} 
      />

      <LeftColumn initial="hidden" animate="visible" variants={fadeInVariants}>
        <Creahill>Creahill</Creahill>
        <OfLondon
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          of London
        </OfLondon>
      </LeftColumn>

      <RightColumn
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
      >
        <MainText>Where Stories Meet Sound.</MainText>
        <SubText>
          We turn thoughts into sound, feelings into melody, and words into resonating stories — blending narrative with music to echo beyond the page.
        </SubText>
        <SubText>
          Discover a world where creativity knows no bounds, where every note tells a story and every story finds its perfect rhythm.
        </SubText>

        <ReadMore
          to="/in-progress"
          aria-label="Find out more about Creahill"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
        >
          Find out more
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M7.05 4.05a.5.5 0 0 1 .7 0l5 5a.5.5 0 0 1 0 .7l-5 5a.5.5 0 0 1-.7-.7L11.29 10 7.05 5.76a.5.5 0 0 1 0-.71z" />
          </svg>
        </ReadMore>
      </RightColumn>
    </Container>
  );
}