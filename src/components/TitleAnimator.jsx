import { motion } from "framer-motion";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 30px;
`;

const letterVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// 👇 Burada props.color'u kullanıyoruz
const AnimatedLetter = styled(motion.span)`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.color || "black"};
`;

export default function TitleAnimator({ text, color = "black" }) {
  return (
    <TitleWrapper>
      {text.split("").map((char, i) => (
        <AnimatedLetter
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={letterVariant}
          color={color}
        >
          {char === " " ? "\u00A0" : char}
        </AnimatedLetter>
      ))}
    </TitleWrapper>
  );
}
