import { motion } from "framer-motion";
import styled from "styled-components";
import { FaMusic, FaUsers, FaGlobe, FaHeadphones } from "react-icons/fa";
import spotifyImage from "../images/spotify.png";
import TitleAnimator from "./TitleAnimator";

const Section = styled.section`
  min-height: 80vh;
  padding: 6rem 2rem;
  color: var(--text-primary);
  background: linear-gradient(135deg, 
    var(--background-primary) 0%, 
    var(--background-secondary) 50%, 
    var(--background-tertiary) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
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
      radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const TextBox = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    text-align: center;
    align-items: center;
  }
`;

const ImageBox = styled(motion.div)`
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

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  max-width: 520px;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 600px;
  }
`;

const HighlightText = styled.span`
  color: var(--primary-purple);
  font-weight: 600;
  background: var(--gradient-subtle);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--background-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-purple-light);
  }
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--primary-blue-light); 
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  
  svg {
    font-size: 18px;
  }
`;


const StatText = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-subtle);
    z-index: 1;
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StyledSpotifyImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform var(--transition-slow);
  
  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    height: 350px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem;
  transform: translateY(100%);
  transition: transform var(--transition-normal);
  z-index: 2;
  
  ${ImageContainer}:hover & {
    transform: translateY(0);
  }
`;

const OverlayTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const OverlayText = styled.p`
  font-size: 0.95rem;
  opacity: 0.9;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '10%'};
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
  hidden: { opacity: 0, x: 50, scale: 0.9 },
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

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 180, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function OurWork() {
  const stats = [
    { icon: FaMusic, label: "Songs Released", value: "12+" },
    { icon: FaUsers, label: "Collaborators", value: "25+" },
    { icon: FaGlobe, label: "Languages", value: "2" },
    { icon: FaHeadphones, label: "Monthly Listeners", value: "10K+" }
  ];

  return (
    <Section>
      {/* Floating decorative elements */}
      <FloatingElement 
        size="80px" 
        top="15%" 
        left="8%" 
        variants={floatingVariants}
        animate="animate"
      />
      <FloatingElement 
        size="60px" 
        top="75%" 
        left="85%" 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />

      <Container>
        <TextBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <TitleContainer>
            <TitleAnimator text="Our Creative Journey" color="var(--text-primary)" />
          </TitleContainer>

          <Text>
            A <HighlightText>Creahill Concept</HighlightText> is a unique transformation of written work into immersive audio experiences. Originally launched with songs, the project has grown into a platform that explores new and engaging ways to connect with audiences.
          </Text>

          <Text>
            In its musical aspect, a diverse group of <HighlightText>composers and vocalists</HighlightText> collaborated with a single lyricist, stepping beyond their usual creative paths to craft something bold and unexpected.
          </Text>

          <Text>
            All songs and content are developed in both <HighlightText>Turkish and English</HighlightText>, blending languages, sounds, and stories into a signature creative vision that defines Creahill.
          </Text>
        </TextBox>

        <ImageBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <ImageContainer>
            <StyledSpotifyImage src={spotifyImage} alt="Creahill music on Spotify" />
            <ImageOverlay>
              <OverlayTitle>Available on Spotify</OverlayTitle>
              <OverlayText>
                Discover our complete collection of musical stories and immersive audio experiences.
              </OverlayText>
            </ImageOverlay>
          </ImageContainer>

          <StatsContainer>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <StatIcon>
                  <stat.icon />
                </StatIcon>
                <StatText>
                  <StatLabel>{stat.label}</StatLabel>
                  <StatValue>{stat.value}</StatValue>
                </StatText>
              </StatItem>
            ))}
          </StatsContainer>
        </ImageBox>
      </Container>
    </Section>
  );
}