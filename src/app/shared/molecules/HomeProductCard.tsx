import React from "react";
import styled from "styled-components";
import { Button, Row, Col } from "react-bootstrap";
import { CategoryItem } from "app/core/models/interfaces/CategoryItem";

interface HomeProductCardProps extends CategoryItem {
  left: boolean;
}

const HomeProductCard: React.FC<HomeProductCardProps> = (props) => {
  console.log(props);
  return (
    <ShadowContainer className="dropshadow">
      <HomeProductCardContainer>
        <ProductDescriptionContainer left={props.left} sm={8}>
          <CategoryName>{props.name}</CategoryName>
          <CategoryDescription>{props.description}</CategoryDescription>
          <ButtonExplore variant="primary">Explore {props.itemKey}</ButtonExplore>
        </ProductDescriptionContainer>
        <ImageContainer left={props.left} sm={4}>
          <CategoryImage src={props.imageUrl} />
        </ImageContainer>
      </HomeProductCardContainer>
    </ShadowContainer>
  );
};

export default HomeProductCard;

const ShadowContainer = styled.div``;

const HomeProductCardContainer = styled(Row)`
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 20px;
  background: #fff;
  align-items: center; 
`;
const ProductDescriptionContainer = styled(Col)<any>`
  order: ${(props) => (props.left ? 2 : 1)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 20px 0px;
`;
const CategoryName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const CategoryDescription = styled.p`
  margin-bottom: 15px;
  text-align: center;
`;

const ButtonExplore = styled(Button)`
  font-weight: 700;
`

const ImageContainer = styled(Col)<any>`
  order: ${(props) => (props.left ? 1 : 2)};
  position: relative;
  z-index: 1;
`;
const CategoryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;


