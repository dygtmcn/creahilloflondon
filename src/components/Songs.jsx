import { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bgImage from "../images/background_white_2.png";
import SongDetail from "./SongDetail";
import TitleAnimator from "./TitleAnimator";

const songs = [
  { id: 1, embedUrl: "https://open.spotify.com/embed/track/2eqk8GixsdvlVcodJtA5Iw?utm_source=generator", title: "Song Title 1" },
  { id: 2, embedUrl: "https://open.spotify.com/embed/track/5NqO901dYGLbT5nSSl6nEK?utm_source=generator", title: "Song Title 2" },
  { id: 3, embedUrl: "https://open.spotify.com/embed/track/1nGBvEG0b6AEVjT156smxx?utm_source=generator", title: "Song Title 3" },
  { id: 4, embedUrl: "https://open.spotify.com/embed/track/1lEm24EszkcaxLlghcriv7?utm_source=generator", title: "Song Title 4" },
  { id: 5, embedUrl: "https://open.spotify.com/embed/track/6CjCwwDPIlcUDpOhsumwkR?utm_source=generator", title: "Song Title 5" },
];

const Section = styled.section`
  min-height: 80vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, 
    var(--background-primary) 0%, 
    var(--background-secondary) 50%, 
    var(--background-tertiary) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 4rem 1rem;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-2xl);
  padding: 1rem 0;
`;

const ScrollRow = styled(motion.div)`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 1rem 0 2rem 0;
  position: relative;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background-secondary);
    border-radius: var(--radius-md);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gradient-primary);
    border-radius: var(--radius-md);
    transition: background var(--transition-fast);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--gradient-secondary);
  }

  /* Firefox */
  scrollbar-color: var(--primary-purple) var(--background-secondary);
  scrollbar-width: thin;
`;

const Box = styled(motion.div)`
  min-width: 400px;
  height: 300px;
  border-radius: var(--radius-xl);
  background: var(--background-primary);
  border: 1px solid var(--border-light);
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-purple-light);
  }

  @media (max-width: 640px) {
    min-width: 320px;
    height: 250px;
  }
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  font-size: 20px;
  font-weight: bold;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: var(--shadow-xl);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const LeftArrow = styled(NavigationButton)`
  left: -25px;

  @media (max-width: 768px) {
    left: -20px;
  }
`;

const RightArrow = styled(NavigationButton)`
  right: -25px;

  @media (max-width: 768px) {
    right: -20px;
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const ProgressDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--primary-purple)' : 'var(--border-medium)'};
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--primary-purple-light);
    transform: scale(1.2);
  }
`;

const boxVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

export default function Songs() {
  const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScrollForward = () => {
    const scrollAmount = 420; // 400px width + 20px gap
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => Math.min(prev + 1, songs.length - 1));
    }
  };

  const handleScrollBack = () => {
    const scrollAmount = 420;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const scrollToIndex = (index) => {
    const scrollAmount = index * 420;
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  return (
    <Section id="songs">
      <TitleContainer>
        <TitleAnimator text="Our Musical Journey" color="var(--text-primary)" />
        <Subtitle>
          Explore our collection of songs where stories meet sound. Each track is a unique blend of narrative and melody, crafted to resonate with your soul.
        </Subtitle>
      </TitleContainer>

      <Container>
        <ScrollContainer>
          <LeftArrow 
            onClick={handleScrollBack}
            disabled={!canScrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous songs"
          >
            ‹
          </LeftArrow>

          <RightArrow 
            onClick={handleScrollForward}
            disabled={!canScrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next songs"
          >
            ›
          </RightArrow>

          <ScrollRow 
            ref={scrollRef}
            onScroll={checkScrollPosition}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {songs.map((song, i) => (
              <Box
                key={song.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={boxVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <SongDetail embedUrl={song.embedUrl} />
              </Box>
            ))}
          </ScrollRow>
        </ScrollContainer>

        <ProgressIndicator>
          {songs.map((_, index) => (
            <ProgressDot
              key={index}
              active={index === currentIndex}
              onClick={() => scrollToIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </ProgressIndicator>
      </Container>
    </Section>
  );
}