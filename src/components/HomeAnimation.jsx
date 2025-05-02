import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import bgImage from "../images/background.png";

const fadeOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        opacity: 0,
        y: -60,
        transition: { duration: 0.8, ease: "easeInOut" },
    },
};

const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const subtitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, delay: 0.4, ease: "easeOut" },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 1 + i * 0.3,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
`;

const Branding = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 80px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
  font-family: "Segoe UI", sans-serif;
  letter-spacing: 2px;
`;

const Creahill = styled(motion.h1)`
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
`;

const OfLondon = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #ff8edf;
  letter-spacing: 6px;
`;

const CenteredRow = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  padding: 0 80px;
`;

const LeftText = styled(motion.div)`
  font-size: 5rem;
  font-weight: bold;
  text-align: left;
  max-width: 500px;
`;

const RightText = styled(motion.div)`
  font-size: 1.5rem;
  margin-top: 20px;
  text-align: left;
  max-width: 600px;
`;

const ReadMore = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #a020f0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  svg {
    margin-left: 8px;
    width: 18px;
    height: 18px;
    fill: #a020f0;
  }
`;

export default function HomeAnimation() {
    const [showMainText, setShowMainText] = useState(false);
    const [showHeaderTitle, setShowHeaderTitle] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowMainText(true);
        }, 1000);

        const timer2 = setTimeout(() => {
            setShowHeaderTitle(true);
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <Container>
            <AnimatePresence>
                {!showMainText && (
                    <Branding
                        key="branding"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeOut}
                    >
                        <Creahill
                            initial="hidden"
                            animate="visible"
                            variants={titleVariants}
                        >
                            Creahill
                        </Creahill>
                        <OfLondon
                            initial="hidden"
                            animate="visible"
                            variants={subtitleVariants}
                        >
                            of London
                        </OfLondon>
                    </Branding>
                )}
            </AnimatePresence>

            {showHeaderTitle && (
                <motion.div
                    style={{
                        position: "fixed",
                        top: "22px", // Header yüksekliğine göre ince ayar
                        left: "90px", // logo genişliği + biraz boşluk
                        display: "flex",
                        alignItems: "flex-end", // taban hizası
                        gap: "8px",
                        zIndex: 2000,
                        fontFamily: "Segoe UI, sans-serif",
                    }}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            color: "#2a167a",
                            lineHeight: 1,
                        }}
                    >
                        Creahill
                    </motion.span>
                    <motion.span
                        style={{
                            fontSize: "1rem",
                            color: "#a020f0",
                            letterSpacing: "2px",
                            marginBottom: "2px",
                            lineHeight: 1,
                        }}
                    >
                        of London
                    </motion.span>
                </motion.div>
            )}


            {showMainText && (
                <CenteredRow>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            maxWidth: "600px",
                        }}
                    >
                        <LeftText
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            Where Stories Meet Sound.
                        </LeftText>

                        <RightText
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            We turn thoughts into sound, feelings into melody, and words into
                            resonating stories — blending narrative with music to echo beyond
                            the page.
                        </RightText>

                        <ReadMore
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            Find out more
                            <svg viewBox="0 0 20 20">
                                <path d="M7.05 4.05a.5.5 0 0 1 .7 0l5 5a.5.5 0 0 1 0 .7l-5 5a.5.5 0 0 1-.7-.7L11.29 10 7.05 5.76a.5.5 0 0 1 0-.71z" />
                            </svg>
                        </ReadMore>
                    </div>
                </CenteredRow>
            )}
        </Container>
    );
}
