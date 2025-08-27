import TitleAnimator from "./TitleAnimator";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Section = styled.section`
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  color: white;
  padding: 6rem 2rem;
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
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
`;

const Right = styled(motion.div)`
  flex: 1;
`;

const TitleContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  
  strong {
    color: white;
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: var(--radius-lg);
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  font-weight: 500;
  transition: all var(--transition-normal);
  flex: 1;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.9);
    background: rgba(30, 41, 59, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
    background: rgba(30, 41, 59, 0.85);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00d9ff 0%, #00b4d8 100%);
  color: #003844;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  min-width: 140px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 217, 255, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(34, 197, 94, 0.2);
  border: 2px solid rgba(34, 197, 94, 0.3);
  color: #dcfce7;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-lg);
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '10%'};
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
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
    y: [-10, 10, -10],
    rotate: [0, 180, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function MailingList() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

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
        top="70%" 
        left="85%" 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />

      <Container>
        <Left
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <TitleContainer>
            <TitleAnimator text="Join our" color="#1e293b" />
            <TitleAnimator text="mailing list" color="#1e293b" />
          </TitleContainer>
        </Left>

        <Right
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <Description>
            <strong>
              Stay in the loop with Creahill: latest releases, exclusive content, behind-the-scenes stories and upcoming events.
            </strong>
            <br /><br />
            By subscribing, you'll be the first to know about our musical journeys and creative collaborations. We respect your privacy and you can unsubscribe at any time.
          </Description>
          
          {!isSubmitted ? (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  disabled={isLoading}
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  disabled={isLoading}
                />
              </InputGroup>
              <Button 
                type="submit" 
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </Form>
          ) : (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Thank you for subscribing! Welcome to the Creahill family.
            </SuccessMessage>
          )}
        </Right>
      </Container>
    </Section>
  );
}