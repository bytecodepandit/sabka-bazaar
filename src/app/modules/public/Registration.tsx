import React from "react";
import { Container,Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import styled from "styled-components";
import {useDispatch} from 'react-redux'
import { toggleSidebar } from "app/store/reducers/layout.reducer";

const Registration = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(toggleSidebar(false));
    return () => {
      dispatch(toggleSidebar(true))
    };
  }, [])
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <RegistrationTitle>Signup</RegistrationTitle>
          <RegistrationTabLine>
            We do not share your personal details with anyone
          </RegistrationTabLine>
        </Col>
        <Col lg={5}>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="First Name"/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Last Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Confirm Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Confirm Password" />
            </FloatingLabel>
            <ButtonRegistration variant="primary" className="btn-login">Signup</ButtonRegistration>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;

const RegistrationTitle = styled.h1`
  font-weight: bold;
`;

const RegistrationTabLine = styled.p``;

const ButtonRegistration = styled(Button)`
  width: 100%;
  border-radius: 0px;
  padding: 10px 15px;
  font-size: 16px;
  margin-top: 30px;
  font-weight: bold;
`
