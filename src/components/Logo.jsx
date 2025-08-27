// src/components/Logo.js
import React from "react";
import styled from "styled-components";
import logo from "../images/creahill_logo.png";

const StyledLogo = styled.div`
  width: 90px;
  height: 70px;
  margin:0;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Logo = (props) => {
  return <StyledLogo {...props} />;
};

export default Logo;
