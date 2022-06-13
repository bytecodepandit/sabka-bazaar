import React from 'react';
import breakpoints from "app/theme/breakpoints";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage src="/static/images/logo.png" />;
};

export default Logo;

const LogoImage = styled.img`
    height: 70px;
    width: auto;
    @media screen and (max-width: ${breakpoints.lg}) {
      height: 50px;
    }
`
