import { motion } from "framer-motion";
import styled from "styled-components";

const creahillVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

const ofLondonVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 1, ease: "easeOut" },
    },
};

const sunriseTextVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        clipPath: "inset(100% 0% 0% 0%)",
    },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
            duration: 1.1,
            delay: 1.2,
            ease: [0.23, 1, 0.32, 1],
        },
    },
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  background-color: #fcf9f6;
  color: #333;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 80px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
`;

const RightColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin-top: 50px;
`;

const Creahill = styled(motion.h1)`
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  color: #2c2c2c;
`;

const OfLondon = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  color: #e940b8;
  letter-spacing: 6px;
`;

const MainText = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 600;
  text-align: left;
  overflow: hidden;
  display: inline-block;
`;

const SubText = styled(motion.div)`
  font-size: 1.25rem;
  margin-top: 20px;
  text-align: left;
  line-height: 1.6;
  max-width: 540px;
  overflow: hidden;
  display: inline-block;
`;

const ReadMore = styled(motion.div)`
  display: inline-block;
  overflow: hidden;
  margin-top: 20px;
  font-size: 1.1rem; 
  font-weight: bold;
  color: #a020f0;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateX(4px);
    color: #6a0dad;
  }

 svg {
  margin-left: 8px;
  width: 18px;
  height: 18px;
  fill: currentColor;
  position: relative;
  top: 5px; 
}

`;

export default function HomeAnimation() {
    return (
        <Container>
            <LeftColumn>
                <Creahill
                    initial="hidden"
                    animate="visible"
                    variants={creahillVariants}
                >
                    Creahill
                </Creahill>
                <OfLondon
                    initial="hidden"
                    animate="visible"
                    variants={ofLondonVariants}
                >
                    of London
                </OfLondon>
            </LeftColumn>

            <RightColumn
                initial="hidden"
                animate="visible"
                variants={sunriseTextVariants}
            >
                <MainText>
                    Where Stories Meet Sound.
                </MainText>
                <SubText>
                    We turn thoughts into sound, feelings into melody, and words into resonating stories — blending narrative with music to echo beyond the page.
                </SubText>
                <SubText>
                    We turn thoughts into sound, feelings into melody, and words into resonating stories — blending narrative with music to echo beyond the page.
                </SubText>
                <ReadMore>
                    Find out more
                    <svg viewBox="0 0 20 20">
                        <path d="M7.05 4.05a.5.5 0 0 1 .7 0l5 5a.5.5 0 0 1 0 .7l-5 5a.5.5 0 0 1-.7-.7L11.29 10 7.05 5.76a.5.5 0 0 1 0-.71z" />
                    </svg>
                </ReadMore>
            </RightColumn>
        </Container>
    );
}
