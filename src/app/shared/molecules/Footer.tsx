import breakpoints from "app/theme/breakpoints";
import colors from "app/theme/colors";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <CopyRightTagLine>
        Copyright @ 2011 - 2018 Subka Bazaar Grocery Supplies Pvt ltd.
      </CopyRightTagLine>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: ${colors.fadeGray};
  padding: 15px; 
`;

const CopyRightTagLine = styled.p`
    margin:0px; 
    padding-left: 15px;
    @media screen and (max-width: ${breakpoints.xl}) {
      text-align: center;
    }
`;
