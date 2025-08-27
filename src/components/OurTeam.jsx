const CreatorName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const CreatorTitle = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0.5rem 0 0 0;
  text-align: center;
  font-weight: 500;
`;import styled from "styled-components";
import { motion } from "framer-motion";
import sImage from "../images/sinem.jpg";
import TitleAnimator from "./TitleAnimator";

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, 
    var(--background-secondary) 0%, 
    var(--background-tertiary) 100%
  );
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const ImageContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 2rem;
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--background-primary);
  box-shadow: var(--shadow-xl);
  transition: all var(--transition-slow);
  position: relative;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  background: var(--gradient-primary);
  z-index: 1;
  opacity: 0.8;
  animation: pulse 3s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.02);
      opacity: 0.6;
    }
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 600px;
  }
`;

const QuoteContainer = styled(motion.div)`
  background: var(--background-primary);
  border-left: 4px solid var(--primary-purple);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: var(--shadow-sm);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -4px;
    right: -2px;
    bottom: -2px;
    background: var(--gradient-primary);
    border-radius: var(--radius-lg);
    z-index: -1;
    opacity: 0.1;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -12px;
  left: 1.5rem;
  width: 24px;
  height: 24px;
  background: var(--primary-purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;

  &::after {
    content: '"';
  }
`;

const QuoteText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.6;
  margin: 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const SkillBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius-lg);
  color: #1e293b;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    border-color: #1e40af;
    background: rgba(30, 64, 175, 0.05);
  }

  @media (max-width: 1024px) {
    width: auto;
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
  right: ${props => props.right || '10%'};
  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const floatingVariants = {
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function OurTeam() {
  const skills = [
    { label: "Musical Composition" },
    { label: "Lyrical Writing" },
    { label: "Creative Direction" }
  ];

  return (
    <Section>
      {/* Floating decorative elements */}
      <FloatingElement 
        size="80px" 
        top="10%" 
        right="6%" 
        variants={floatingVariants}
        animate="animate"
      />
      <FloatingElement 
        size="50px" 
        top="70%" 
        right="8%" 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      <Container>
        <TextContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <TitleContainer>
            <TitleAnimator text="Meet the Creator" color="var(--text-primary)" />
          </TitleContainer>

          <Description>
            Behind Creahill's unique sound is a visionary artist who transforms written narratives into captivating musical experiences. With a passion for storytelling through melody, our creative director brings together diverse talents to craft something truly extraordinary.
          </Description>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillBadge
                key={index}
                icon={skill.icon}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {skill.label}
              </SkillBadge>
            ))}
          </SkillsContainer>
        </TextContent>

        <ImageContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <ImageContainer>
            <ImageBorder />
            <StyledImage src={sImage} alt="Sinem Dinçer - Creative Director" />
          </ImageContainer>
          
          <CreatorName>Sinem Dinçer</CreatorName>
          <CreatorTitle>Creative Director</CreatorTitle>

          <QuoteContainer
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <QuoteIcon />
            <QuoteText>
              "Music has the power to tell stories that words alone cannot express. At Creahill, we bridge the gap between literature and sound, creating experiences that resonate deeply with the soul."
            </QuoteText>
          </QuoteContainer>
        </ImageContent>
      </Container>
    </Section>
  );
}