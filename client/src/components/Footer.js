import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column" })}
`;

// ------------------------------------
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  width: 30vw;

  ${mobile({ width: "90vw" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

// -------------------------------------
const Center = styled.div`
  flex: 1;
  padding: 20px;
  /* display: flex; */

  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

// --------------------------------------
const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>WESH.</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime fugit
          voluptate cum! In voluptatibus et fugiat aut corporis ipsum
          accusantium cum vitae obcaecati ipsa magnam, minus perferendis
          voluptatum ullam quasi iste fugit exercitationem officiis dolore. Amet
          ea aut necessitatibus velit.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <NavLink to="/" style={{color:"black", textDecoration:"none"}}>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/cart" style={{color:"black", textDecoration:"none"}}>Cart</NavLink>
          </ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whislist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Lot VQ 134 HK Mandroseza
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +261 34 48 470 65
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          falmelopros@gmail.com
        </ContactItem>
        <Payment src="../files/payment-method.png" />
      </Right>
    </Container>
  );
};

export default Footer;
