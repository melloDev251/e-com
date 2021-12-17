import { Home } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../files/fit-dance.jpg") center;
  /* background-repeat: no-repeat; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  opacity: 0.6;


  ${mobile({ width:"75%", opacity:"0.6"})}

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  min-width: 40%;

  &:focus {
    outline: none;
  }
`;
const Agrement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;

  ${mobile({ width:"65%"})}


  &:hover {
    letter-spacing: 5px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0px -10px 0px 20px;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Agrement>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            a accusamus id illo dolore? Inventore modi ex assumenda dolorum odio
            eveniet molestias accusamus id vitae vero unde nostrum non aut{" "}
            <b style={{ cursor: "pointer" }}>PRIVACY POLICY</b>
          </Agrement>
          <Button>CREATE</Button>
          <Item>OR</Item>
          <Item>
            <NavLink to="/">
              <Home style={{ fontSize: "40px", color: "black" }} />
            </NavLink>
          </Item>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
