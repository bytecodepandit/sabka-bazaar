import React from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { Logo } from "../../atoms";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { ROUTES } from "app/route/app-route-labels";
import { BsFillCartFill } from "react-icons/bs";
import breakpoints from "app/theme/breakpoints";
import colors from "app/theme/colors";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store/store";
import { MY_CART } from "app/store/slices/action.type";
import { hideCartModal, toggleCartModal } from "app/store/slices/my-cart.slice";
import "./style.scss";

const Header: React.FC<any> = () => {
  const [showNavbarMenu, setShowNavbarMenu] = React.useState<boolean>(false);
  const count = useSelector((state: RootState) => state[MY_CART].count);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggleCartModal());
    setShowNavbarMenu(!showNavbarMenu);
  };
  const hideCart = () => {
    dispatch(hideCartModal());
    setShowNavbarMenu(true);
  };

  const hideMenu = () => {
    setShowNavbarMenu(false);
  }



  return (
    <NavbarWhite bg="light" expand="lg" sticky="top" expanded={showNavbarMenu}>
      <LinkContainer to={ROUTES.HOME}>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle onClick={hideCart} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLinkContainer className="me-auto">
          <LinkContainer to={ROUTES.HOME}>
            <NavLink>Home</NavLink>
          </LinkContainer>
          <LinkContainer to={ROUTES.PRODUCTS}>
            <NavLink>Products</NavLink>
          </LinkContainer>
        </NavLinkContainer>
      </Navbar.Collapse>
      <Navbar.Offcanvas placement="end">
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <LinkContainer onClick={hideMenu} to={ROUTES.SIGN_IN}>
              <NavLink href="#action1">Signin</NavLink>
            </LinkContainer>
            <LinkContainer onClick={hideMenu} to={ROUTES.REGISTRATION}>
              <NavLink href="#action2">Registration</NavLink>
            </LinkContainer>
            <LinkContainer
              onClick={hideMenu}
              className="mobile_link"
              to={ROUTES.HOME}
            >
              <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer
              onClick={hideMenu}
              className="mobile_link"
              to={ROUTES.PRODUCTS}
            >
              <NavLink>Products</NavLink>
            </LinkContainer>
          </Nav>
          <Button variant="light" onClick={toggleCart}>
            {/* <BsFillCartFill color={colors.primary} /> */}
            <CartImage src={'/static/images/cart.svg'} />
            <span>{count} Items</span>
          </Button>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </NavbarWhite>
  );
};

export default Header;

const NavbarWhite = styled(Navbar)`
  background-color: #fff !important;
  box-shadow: 0px 3px 17px 3px rgba(0, 0, 0, 0.05);
  @media screen and (min-width: ${breakpoints.lg}) {
    padding-bottom: 0px;
  }
`;

const NavLinkContainer = styled(Nav)`
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 20px;
  }
  @media screen and (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const NavLink = styled(Nav.Link)`
  font-weight: bold;
`;

const CartImage = styled.img`
  width: 25px;
`