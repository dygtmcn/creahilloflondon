import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  color: #333;
  padding: 40px 20px;
  border-top: 1px solid #ddd;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Section = styled.div`
  flex: 1;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  color: #2a167a;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;

  a {
    color: #a020f0;
    font-size: 1.4rem;

    &:hover {
      color: #7e1cc1;
    }
  }
`;

const LinksSection = styled(Section)`
  display: flex;
  justify-content: flex-end;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  a {
    text-decoration: none;
    color: #555;
    font-size: 0.95rem;

    &:hover {
      color: #a020f0;
    }
  }
`;

const BottomBar = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
  line-height: 1.6;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Logo>Creahill</Logo>
          <Text>
            2025 Creahill of London<br />
            Address line 1<br />
            Address Address line line 2
          </Text>
          <SocialIcons>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </SocialIcons>
        </Section>

        <LinksSection>
          <Links>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </Links>
        </LinksSection>
      </FooterContent>

      <BottomBar>
        &copy; {new Date().getFullYear()} Creahill of London — All rights reserved.
        <br />
        Designed by DT
      </BottomBar>
    </FooterContainer>
  );
}
