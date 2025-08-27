import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #f8fafc;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(99, 102, 241, 0.5) 25%, 
      rgba(236, 72, 153, 0.5) 75%, 
      transparent 100%
    );
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const BrandSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Playfair Display', serif;
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  margin: 0.5rem 0 1.5rem 0;
  font-style: italic;
`;

const Address = styled.div`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
`;

const SocialSection = styled.div`
  margin-top: 2rem;
`;

const SocialTitle = styled.h4`
  font-size: 1.1rem;
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #cbd5e1;
  font-size: 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    color: white;
    background: var(--gradient-primary, linear-gradient(135deg, #6366f1, #ec4899));
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  }
`;

const LinksSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const LinksTitle = styled.h4`
  font-size: 1.1rem;
  color: #e2e8f0;
  margin: 0;
  font-weight: 600;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: #94a3b8;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.25rem 0;

  &:hover {
    color: #e2e8f0;
    transform: translateX(4px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: var(--gradient-primary, linear-gradient(135deg, #6366f1, #ec4899));
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 12px;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
    
    &:hover {
      transform: none;
    }
  }
`;

const ContactSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ContactTitle = styled.h4`
  font-size: 1.1rem;
  color: #e2e8f0;
  margin: 0;
  font-weight: 600;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled(Link)`
  color: #94a3b8;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e2e8f0;
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  
  span {
    color: #94a3b8;
  }
`;

const Designer = styled.div`
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: #64748b;
  
  span {
    background: linear-gradient(135deg, #6366f1, #ec4899);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
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

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div>
            <Logo>Creahill of London</Logo>
            <Tagline>Where Stories Meet Sound</Tagline>
            <Address>
              <strong>Creahill of London Ltd.</strong><br />
              123 London Road<br />
              London, SW1A 1AA<br />
              United Kingdom
            </Address>
          </div>
          
          <SocialSection>
            <SocialTitle>Follow Our Journey</SocialTitle>
            <SocialIcons>
              <SocialIcon 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </SocialIcon>
              <SocialIcon 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaYoutube />
              </SocialIcon>
            </SocialIcons>
          </SocialSection>
        </BrandSection>

        <LinksSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <LinksTitle>Quick Links</LinksTitle>
          <Links>
            <FooterLink to="/in-progress">Home</FooterLink>
            <FooterLink to="/in-progress">About Us</FooterLink>
            <FooterLink to="/in-progress">Blog</FooterLink>
            <FooterLink to="/in-progress">Latest News</FooterLink>
            <FooterLink to="/in-progress">Our Work</FooterLink>
            <FooterLink to="/in-progress">Contact</FooterLink>
          </Links>
        </LinksSection>

        <ContactSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactInfo>
            <ContactItem to="/in-progress">
              hello@creahilloflondon.com
            </ContactItem>
            <ContactItem to="/in-progress">
              +44 20 7123 4567
            </ContactItem>
            <ContactItem to="/in-progress">
              Send us a message
            </ContactItem>
          </ContactInfo>
        </ContactSection>
      </FooterContent>

      <BottomBar>
        <Copyright>
          &copy; {new Date().getFullYear()} <span>Creahill of London</span> — All rights reserved.
        </Copyright>
        <Designer>
          Designed by <span>DT</span>
        </Designer>
      </BottomBar>
    </FooterContainer>
  );
}