import React from "react";
import styled from "styled-components";
import {
  Search,
  ShoppingCartOutlined,
  FavoriteBorder,
} from "@material-ui/icons";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 380px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  ${mobile({ margin: "0px -20px", minWidth: "300px" })}

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;

  ${mobile({ width: "80vw", height: "40vh" })}
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: black;
    transform: scale(1.3);
    color: white;
  }
`;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <NavLink to="" style={{ color: "black" }}>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </NavLink>
        <NavLink to={`/product-page/${item._id}`} style={{ color: "black" }}>
          <Icon>
            <Search />
          </Icon>
        </NavLink>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
