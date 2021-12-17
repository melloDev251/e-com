import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  margin-bottom: 40px;

  ${mobile({ height: "35px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 0.1em;
  transition: all 0.5s ease;

  ${mobile({ fontSize: "22px", marginRight:"-20px" })}

  &:hover {
    text-decoration: line-through;
    text-align: center;
    letter-spacing: 0.5em;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const MenuItem = styled.div`
  font-style: 15px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;

  ${mobile({ fontSize: "12px", marginLeft: "5px" })}

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search here..." />
            <Search style={{ color: "black", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>WESH</Logo>
          </NavLink>
        </Center>
        <Right>
          <NavLink
            to="/register"
            exact
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </NavLink>
          <NavLink
            to="/login"
            exact
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </NavLink>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <NavLink to="/cart" style={{ color: "black" }}>
                <ShoppingCartOutlined />
              </NavLink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
