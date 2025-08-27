// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled(motion.nav)`
  padding: 0 2rem;
  height: 9vh;
  background: ${(props) =>
    props.isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid
    ${(props) => (props.isScrolled ? "rgba(226, 232, 240, 0.8)" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

/* Branding alanı */
const BrandHome = styled(motion(Link))`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

const BrandText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2; /* metni blob'un üstünde tut */
`;

const BrandNameWrap = styled.div`
  position: relative;
  display: inline-block;
  line-height: 1;
`;

const BrandName = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  font-family: "Playfair Display", serif;

  background: linear-gradient(135deg, #1e40af 0%, #1e293b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @supports not (background-clip: text) {
    color: #1e293b;
    background: none;
  }
`;

const BrandTagline = styled.span`
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
`;

const BrandBlob = styled(motion.div)`
  position: absolute;
  left: -0.5em;
  top: -0.5em; /* mobile'da daha az yukarıda */
  width: 2.0em; /* mobile'da daha küçük */
  height: 2.0em; /* mobile'da daha küçük */
  border-radius: 50%;
  background: rgba(236, 72, 153, 0.10);       
  border: 1px solid rgba(236, 72, 153, 0.20); 
  backdrop-filter: blur(10px);
  z-index: 1;           
  pointer-events: none;

  @media (min-width: 1024px) {
    width: 2.8em; /* desktop'ta da küçük */
    height: 2.8em;
    top: -0.2em; /* desktop'ta biraz daha aşağıda */
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);

  &:hover {
    background-color: var(--background-secondary);
  }

  @media (max-width: 768px) {
    display: block;
  }

  .hamburger-lines div {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    margin: 4px 0;
    transition: all 0.3s ease;
  }
`;

const NavLinkLike = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
  position: relative;
  display: block;
  cursor: pointer;

  &:hover {
    color: #1e40af;
    background-color: rgba(30, 64, 175, 0.08);
    transform: translateY(-1px);
  }

  &.active {
    color: #1e40af;
    background: rgba(30, 64, 175, 0.1);
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: linear-gradient(135deg, #1e40af 0%, #1e293b 100%);
    border-radius: 1px;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 9vh;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-light);
  padding: 2rem;
  z-index: 999;
`;

const MobileMenuItem = styled(motion.div)`
  margin-bottom: 1rem;
`;

const MobileNavLink = styled.a`
  display: block;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;

  &:hover,
  &.active {
    color: #1e40af;
    background: rgba(30, 64, 175, 0.1);
    transform: translateX(4px);
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü mapping (header: About → ourWork, Blog → news, Songs → songs)
  const menuItems = [
    { key: "about", label: "About", targetId: "ourWork" },
    { key: "blog", label: "Blog", targetId: "news" },
    { key: "songs", label: "Songs", targetId: "songs" },
  ];

  // Smooth scroll + focus
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("nav");
    const offset = header ? header.offsetHeight + 8 : 80;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });

    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    setTimeout(() => el.focus({ preventScroll: true }), 300);
  };

  const handleMenuClick = (e, item) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(item.targetId), 50);
    } else {
      scrollToSection(item.targetId);
    }
    setIsMobileMenuOpen(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setCurrentSection(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    if (!sections.length) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { root: null, threshold: 0.4, rootMargin: "-20% 0px -40% 0px" }
    );

    sections.forEach((sec) => observerRef.current.observe(sec));
    return () => observerRef.current && observerRef.current.disconnect();
  }, [location.pathname]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.08 } },
  };
  const mobileItemVariants = { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } };

  return (
    <>
      <Nav
        isScrolled={isScrolled}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <BrandHome
          to="/"
          onClick={handleBrandClick}
          aria-label="Go to homepage"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Blur'lu pembe blob (yukarı çekilmiş ve küçültülmüş) */}
          <BrandText>
            <BrandNameWrap>
              <BrandBlob
                aria-hidden="true"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <BrandName style={{ position: "relative", zIndex: 2 }}>Creahill</BrandName>
            </BrandNameWrap>
            <BrandTagline style={{ position: "relative", zIndex: 2 }}>of London</BrandTagline>
          </BrandText>
        </BrandHome>

        <Menu>
          {menuItems.map((item) => (
            <li key={item.key}>
              <NavLinkLike
                href={`#${item.targetId}`}
                className={currentSection === item.targetId ? "active" : ""}
                onClick={(e) => handleMenuClick(e, item)}
              >
                {item.label}
              </NavLinkLike>
            </li>
          ))}
        </Menu>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="hamburger-lines">
            <div />
            <div />
            <div />
          </div>
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {menuItems.map((item) => (
              <MobileMenuItem key={item.key} variants={mobileItemVariants}>
                <MobileNavLink
                  href={`#${item.targetId}`}
                  className={currentSection === item.targetId ? "active" : ""}
                  onClick={(e) => handleMenuClick(e, item)}
                >
                  {item.label}
                </MobileNavLink>
              </MobileMenuItem>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;