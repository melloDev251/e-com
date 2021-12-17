import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Home } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../files/screen-0.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
  opacity: 0.6;

  ${mobile({ width: "75%", opacity: "0.6" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  margin: 10px 0px;
  padding: 10px;
  min-width: 40%;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 10px 0px;

  ${mobile({ width: "100%" })}

  &:hover {
    letter-spacing: 5px;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-inline: 3px;
  align-items: center;

  /* &:hover {
    color: teal;
  } */
`;

const LinkOth = styled.span`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>
          <Link>DO YOU REMEMBER THE PASSWORD ?</Link>
          <LinkOth>
            <Link>
              <NavLink to="/register" style={{color:"black"}}>CREATE A NEW ACCOUNT</NavLink>
            </Link>
            <Link style={{ textDecoration: "none" }}>OR</Link>
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              <Link>
                <Home />
              </Link>
            </NavLink>
          </LinkOth>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
