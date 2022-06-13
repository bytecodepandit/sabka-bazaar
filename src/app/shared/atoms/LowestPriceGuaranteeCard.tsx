import React from "react";
import styled from "styled-components";

const LowestPriceGuaranteeCard = () => {
  return (
    <CardContainer>
      <GuaranteeImage src="/static/images/lowest-price.png" />
      <GuaranteeTagLine>You Won't find it cheaper anywhere</GuaranteeTagLine>
    </CardContainer>
  );
};

export default LowestPriceGuaranteeCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  background-color: #fff;
  align-items: center;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  overflow: hidden;
`;

const GuaranteeImage = styled.img``;

const GuaranteeTagLine = styled.p`
  margin: 0px;
  margin-left: 20px;
`;
