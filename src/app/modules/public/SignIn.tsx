import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "app/store/reducers/layout.reducer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserService } from "app/core/services/user.service";
import { toast } from "react-toastify";
import { LOGIN_MESSAGE } from "app/core/String";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "app/route/app-route-labels";

const SignIn = () => {
  const navigate = useNavigate();
  const userService = new UserService();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(toggleSidebar(false));
    return () => {
      dispatch(toggleSidebar(true));
    };
  }, []);

  const login = (data: any) => {
    userService.login(data).then((res) => {
      if (res.email === data.email) {
        toast(LOGIN_MESSAGE.loginSuccess, { type: "success" });
        navigate(`/${ROUTES.PRODUCTS}`, { replace: true });
      } else {
        toast(LOGIN_MESSAGE.invalid, { type: "error" });
      }
    });
  };

  const signInFormSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const signInForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInFormSchema,
    onSubmit: login,
  });

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <LoginTitle>Login</LoginTitle>
          <LoginTabLine>
            Get access to your Orders. Wishlist and Recommendations
          </LoginTabLine>
        </Col>
        <Col lg={5}>
          <Form onSubmit={signInForm.handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                onChange={(event) =>
                  signInForm.handleChange("email")(event.target.value)
                }
                value={signInForm.values.email}
                type="email"
                placeholder="Email address"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                onChange={(event) =>
                  signInForm.handleChange("password")(event.target.value)
                }
                value={signInForm.values.password}
                type="password"
                placeholder="Password"
              />
            </FloatingLabel>
            <ButtonLogin
              disabled={!signInForm.isValid}
              variant="primary"
              className="btn-login"
              type="submit"
            >
              Login
            </ButtonLogin>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;

const LoginTitle = styled.h1`
  font-weight: bold;
`;

const LoginTabLine = styled.p``;

const ButtonLogin = styled(Button)`
  width: 100%;
  border-radius: 0px;
  padding: 10px 15px;
  font-size: 16px;
  margin-top: 30px;
  font-weight: bold;
`;
