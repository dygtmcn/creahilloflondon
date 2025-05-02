import { motion } from "framer-motion";
import styled from "styled-components";
import spotifyImage from "../images/spotify.png";
import TitleAnimator from "./TitleAnimator"; // 👈 animasyonlu başlık eklendi

const Section = styled.section`
  min-height: 70vh;
  padding: 60px;
  color: black;
  background:#f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled(motion.div)`
  flex: 1;
  border: none;
  border-radius: 16px;
  background:#f9f9f9;
  min-height: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const StyledSpotifyImage = styled.img`
  width: 100%;
  max-width: 400px;
  min-height: 410px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }
`;

export default function OurWork() {
  return (
    <Section>
      <Container>
        <Box
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <TitleAnimator text="Our Story" color="black" />
          </div>
          <Text>
            The Creahill Concept is a unique transformation of written work into immersive
            audio experiences. Originally launched with songs, the project has grown into
            a platform that explores new and engaging ways to connect with audiences.
          </Text>
          <Text>
            In its musical aspect, a diverse group of composers and vocalists collaborated
            with a single lyricist, stepping beyond their usual creative paths to craft
            something bold and unexpected.
          </Text>
          <Text>
            All songs and content are developed in both Turkish and English, blending
            languages, sounds, and stories into a signature creative vision that defines Creahill.
          </Text>
        </Box>

        <Box
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <StyledSpotifyImage src={spotifyImage} alt="Spotify" />
        </Box>
      </Container>
    </Section>
  );
}
