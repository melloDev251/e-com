import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Annonce from "../components/Annonce";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollButton from "../components/ScrollButton";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.5s ease;

  &:hover {
    border: ${(props) =>
      props.type === "filled" ? "2px solid black" : "transparent"};
    background-color: ${(props) =>
      props.type === "filled" ? "white" : "black"};
    color: ${(props) => (props.type === "filled" ? "black" : "white")};
    /* transform: scale(1.3); */
  }
`;
const TopTexts = styled.div`
  padding: 10px;

  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 160px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px;

  ${mobile({ margin: "50px 20px 50px" })}
`;
const ProductName = styled.span`
  ${mobile({ flexDirection: "row" })}
`;
const ProductID = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: yellowgreen; */
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  ${mobile({ marginBottom: "30px" })}

`;

const Summary = styled.div`
  flex: 1;
  /* background-color: red; */
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;
const SummuryTitle = styled.h1`
  font-weight: 100;
`;
const SummuryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummuryItemText = styled.span``;
const SummuryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: #eee;
`;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Annonce />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="../files/depositphotos_1142337-stock-photo-attractive-young-woman-dancing-removebg-preview.png" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product : </b>HOOD & SHOES
                  </ProductName>
                  <ProductID>
                    {" "}
                    <b>ID : </b>49464484
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size : </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="../files/dance-categories.png" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product : </b>JOGGING
                  </ProductName>
                  <ProductID>
                    {" "}
                    <b>ID : </b>78951658
                  </ProductID>
                  <ProductColor color="grey" />
                  <ProductSize>
                    <b>Size : </b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 55</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummuryTitle>ORDER SUMMARY</SummuryTitle>
            <SummuryItem>
              <SummuryItemText>Subtotal</SummuryItemText>
              <SummuryItemPrice>$ 75</SummuryItemPrice>
            </SummuryItem>
            <SummuryItem>
              <SummuryItemText>Estimated Shipping</SummuryItemText>
              <SummuryItemPrice>$ 5.95</SummuryItemPrice>
            </SummuryItem>
            <SummuryItem>
              <SummuryItemText>Shipping Discount</SummuryItemText>
              <SummuryItemPrice>$ -3.65</SummuryItemPrice>
            </SummuryItem>
            <SummuryItem type="total">
              <SummuryItemText>Total</SummuryItemText>
              <SummuryItemPrice>$ 55</SummuryItemPrice>
            </SummuryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
      <ScrollButton/>
    </Container>
  );
};

export default Cart;
