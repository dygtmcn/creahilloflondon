import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar, FaCalendarAlt, FaClock, FaMusic } from "react-icons/fa";
import newsImage from "../images/ciribim.png";
import TitleAnimator from "./TitleAnimator";
import { Link } from "react-router-dom";

const Section = styled.section`
  min-height: 70vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, 
    var(--background-primary) 0%, 
    var(--background-secondary) 100%
  );
  color: var(--text-primary);
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
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
`;

const ImageBox = styled(motion.div)`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  
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

const StyledNewsImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 400px;
  object-fit: cover;
  transition: transform var(--transition-slow);
  
  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: var(--radius-lg);
  transform: translateY(100%);
  transition: transform var(--transition-normal);
  
  ${ImageContainer}:hover & {
    transform: translateY(0);
  }
`;

const TextBox = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 14px;
    color: var(--text-muted);
  }
`;

const SubTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Playfair Display', serif;
  line-height: 1.3;
  
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 600px;
  }
`;

const ReadMore = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--primary-blue-light);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
  align-self: flex-start;
  position: relative;
  overflow: hidden;

  &::after {
    content: '>';   /* ✅ işaret değiştirildi */
    font-size: 18px;
    transition: transform var(--transition-fast);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);

    &::after {
      transform: translateX(4px);
    }
  }

  @media (max-width: 1024px) {
    align-self: center;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--gradient-subtle);
  border: 1px solid var(--border-light);
  color: var(--primary-purple);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);

  svg {
    font-size: 14px;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
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

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export default function News() {
  return (
    <Section>
      <Container>
        <ImageBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <ImageContainer>
            <StyledNewsImage src={newsImage} alt="Latest news from Creahill" />
            <ImageOverlay>
              <MetaItem>
                <FaStar />
                <span>Featured Story</span>
              </MetaItem>
            </ImageOverlay>
          </ImageContainer>
        </ImageBox>

        <TextBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <TitleContainer>
            <TitleAnimator text="Latest News" color="var(--text-primary)" />
          </TitleContainer>

          <Badge>
            <FaMusic />
            Music & Storytelling
          </Badge>

          <Meta>
            <MetaItem>
              <FaCalendarAlt />
              <span>February 5, 2025</span>
            </MetaItem>
            <MetaItem>
              <FaClock />
              <span>5 min read</span>
            </MetaItem>
          </Meta>

          <SubTitle>
            The Art of Musical Storytelling: Behind Our Creative Process
          </SubTitle>

          <Paragraph>
            Discover how Creahill transforms written narratives into immersive musical experiences. Our latest project explores the intersection of literature and sound, creating a unique auditory journey that resonates with audiences across cultures and languages.
          </Paragraph>

          <ReadMore
            to="/about"   
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Read Full Story
          </ReadMore>
        </TextBox>
      </Container>
    </Section>
  );
}