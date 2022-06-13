import { IncrementDecrementBtn } from "app/shared/atoms";
import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "react-bootstrap";
import { BsX, BsFillTrashFill } from "react-icons/bs";
import "./style.scss";
import { ProductItem } from "app/core/models/interfaces/ProductItem";
import colors from "app/theme/colors";

interface CartItemProps extends ProductItem {
  removeItem: (event: any) => void;
  increaseCount: (event: any) => void;
  decreaseCount: (event: any) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  imageURL,
  id,
  count,
  removeItem,
  decreaseCount,
  increaseCount,
}) => {
  return (
    <Card className="cart_item_card">
      <ProductImgContainer>
        <Card.Img variant="top" src={imageURL} />
      </ProductImgContainer>
      <Card.Body>
        <Row className="justify-content-between">
          <Col xs={11}>
            <Card.Title>{name}</Card.Title>
          </Col>
          <Col xs={1} className="text-end">
            <BsFillTrashFill className="cursor-pointer" onClick={removeItem} color={colors.danger} />
          </Col>
        </Row>
        <Row noGutters className="">
          <Col>
            <PriceContainer>
              <IncrementDecrementBtn
                onDecrement={decreaseCount}
                onIncrement={increaseCount}
                count={count}
              />
              <BsX size={30} />
              <UnitPrice>Rs.{price}</UnitPrice>
            </PriceContainer>
          </Col>
          <Col className="text-end">
            <UnitPrice>Rs.{count * price}</UnitPrice>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartItem;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`;

const ProductImgContainer = styled.div`
  max-width: 11%;
`;

const UnitPrice = styled.span``;
