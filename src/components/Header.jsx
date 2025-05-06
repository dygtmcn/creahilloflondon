import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";      

const Nav = styled.nav`
  padding: 0 10px;
  min-height: 9vh;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`;

const Branding = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin-right: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Branding>
        <Logo></Logo>
      </Branding>
      <Menu>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/about">About</NavLink>
        </Item>
        <Item>
          <NavLink to="/blog">Blog</NavLink>
        </Item>
        <Item>
          <NavLink to="/">Songs</NavLink>
        </Item>
      </Menu>
    </Nav>
  );
};

export default Header;
