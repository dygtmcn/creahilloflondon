import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bgImage from "../images/background_white_2.png";
import SongDetail from "./SongDetail";
import TitleAnimator from "./TitleAnimator";


const songs = [
  { id: 1, embedUrl: "https://open.spotify.com/embed/track/2eqk8GixsdvlVcodJtA5Iw?utm_source=generator" },
  { id: 2, embedUrl: "https://open.spotify.com/embed/track/5NqO901dYGLbT5nSSl6nEK?utm_source=generator" },
  { id: 3, embedUrl: "https://open.spotify.com/embed/track/1nGBvEG0b6AEVjT156smxx?utm_source=generator" },
  { id: 4, embedUrl: "https://open.spotify.com/embed/track/1lEm24EszkcaxLlghcriv7?utm_source=generator" },
  { id: 5, embedUrl: "https://open.spotify.com/embed/track/6CjCwwDPIlcUDpOhsumwkR?utm_source=generator" },
];

const Section = styled.section`
  min-height: 60vh;
  padding: 100px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 600px;
  background-color: #FEFBF7;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 1200px; /* 3 kutu genişliği (282 * 3) + 2 boşluk (24 * 2) */
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
`;


const ScrollRow = styled(motion.div)`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding-bottom: 12px;

  /* Scrollbar stili (Chrome, Safari) */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #003670;
    border-radius: 10px;
  }

  /* Firefox scrollbar rengi */
  scrollbar-color: #003670 transparent;
  scrollbar-width: thin;
`;



const Box = styled(motion.div)`
  min-width: 382px; /* eski: 282px */
  height: 250px;
  border-radius: 12px;
  background-color: transparent;
  flex-shrink: 0;
  overflow: hidden;
`;


const Arrow = styled.button`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  background: #a020f0;
  border: none;
  color: white;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: #7e1cc1;
  }
`;

const LeftArrow = styled(Arrow)`
  left: -20px;
  right: auto;
`;

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export default function Songs() {
  const scrollRef = useRef();

  const handleScrollForward = () => {
    scrollRef.current.scrollBy({ left: 406, behavior: "smooth" }); // 382 + 24 (gap)
  };
  
  const handleScrollBack = () => {
    scrollRef.current.scrollBy({ left: -406, behavior: "smooth" });
  };
  

  return (
    <Section>
      <Container>
      <TitleAnimator text="Our Work" color="black" text-align="center"/>
        <LeftArrow onClick={handleScrollBack}>{"<"}</LeftArrow>
        <Arrow onClick={handleScrollForward}>{">"}</Arrow>

        <ScrollRow ref={scrollRef}>
          {songs.map((song, i) => (
            <Box
              key={song.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={boxVariants}
            >
              <SongDetail embedUrl={song.embedUrl} />
            </Box>
          ))}
        </ScrollRow>
      </Container>
    </Section>
  );
}
