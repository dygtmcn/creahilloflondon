import { motion } from "framer-motion";
import styled from "styled-components";

const TitleWrapper = styled(motion.div)`
  margin-bottom: 30px;
`;

const AnimatedTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => {
    if (props.color === 'white' || props.color === '#ffffff') {
      return '#1e293b'; 
    }
    return props.color || "black";
  }};
  margin: 0;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
  
  /* Beyaz background üzerinde daha iyi görünüm için text-shadow */
  text-shadow: ${(props) => {
    if (props.color === 'white' || props.color === '#ffffff') {
      return '0 2px 4px rgba(0,0,0,0.1)';
    }
    return 'none';
  }};
`;

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function TitleAnimator({ text, color = "black" }) {
  return (
    <TitleWrapper>
      <AnimatedTitle
        color={color}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        {text}
      </AnimatedTitle>
    </TitleWrapper>
  );
}