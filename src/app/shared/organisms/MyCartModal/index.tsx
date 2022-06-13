import React from "react";
import { Modal, ModalProps, Button } from "react-bootstrap";
import "./style.scss";
import { BsX, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { CartItem } from "app/shared/molecules";
import { LowestPriceGuaranteeCard, NoDataFound } from "app/shared/atoms";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store/store";
import { MY_CART } from "app/store/slices/action.type";
import { useNavigate } from "react-router-dom";
import {
  decreaseCount,
  increaseCount,
  removeItem,
  toggleCartModal,
} from "app/store/slices/my-cart.slice";
import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { ROUTES } from "app/route/app-route-labels";

interface MyCartModalProps extends ModalProps {}

const MyCartModal: React.FC<MyCartModalProps> = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleCart = () => dispatch(toggleCartModal());

  const removeItemFromCart = (item: ProductItem) => dispatch(removeItem(item));

  const increaseItemCountInCart = (item: ProductItem) =>
    dispatch(increaseCount(item));

  const decreaseItemCountInCart = (item: ProductItem) =>
    dispatch(decreaseCount(item));

  const { showCartModal, items, count, totalAmount } = useSelector(
    (state: RootState) => state[MY_CART]
  );

  const gotoProductScreen = () => {
    toggleCart();
    navigate(`/${ROUTES.PRODUCTS}`, { replace: true })
  }
  return (
    <Modal {...props} dialogClassName="my_cart_modal" show={showCartModal}  onBackdropClick={toggleCart}>
      <Modal.Header>
        <Modal.Title>My Cart ({count} items)</Modal.Title>
        <button
          onClick={toggleCart}
          type="button"
          className="btn-close"
          aria-label="Close"
        >
          <BsX size={30} />
        </button>
      </Modal.Header>
      <Modal.Body>
        {items.length > 0 &&
          items.map((elem, index) => (
            <CartItem
              increaseCount={() => increaseItemCountInCart(elem)}
              decreaseCount={() => decreaseItemCountInCart(elem)}
              removeItem={() => removeItemFromCart(elem)}
              key={`my_cart_item_${elem.id}`}
              {...elem}
            />
          ))}

        {items.length === 0 && (
          <React.Fragment>
            <NoDataFound onClick={gotoProductScreen} />
          </React.Fragment>
        )}

        {items.length > 0 && <LowestPriceGuaranteeCard />}
      </Modal.Body>
      {items.length > 0 && (
        <Modal.Footer>
          <PromoCodeTagLine>
            Promo code can be applied on payment page
          </PromoCodeTagLine>
          <Button variant="primary" className="btn-checkout">
            <span>Proceed to Checkout</span>
            <span>
              Rs.{totalAmount} <BsChevronRight />
            </span>
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default MyCartModal;

const PromoCodeTagLine = styled.p`
  text-align: center;
  font-weight: 500;
`;
