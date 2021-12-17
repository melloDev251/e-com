import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  position: sticky;
  /* position: --webkit-sticky; */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;

  overflow: hidden;
  max-width: 100%;

  ${mobile({ height: "30px", fontSize: "14px", textAlign: "center" })}
`;

const Text = styled.div`
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  padding: 10px 2em 10px 100%;
  animation: defilement-rtl 10s infinite linear;

  @keyframes defilement-rtl {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    100% {
      -webkit-transform: translate(-100%);
      transform: translate(-100%);
    }
  }

  :hover {
    animation-play-state: paused;
    cursor: pointer;
  }
`;

const Annonce = () => {
  return (
    <Container>
      <Text>
        wesh is offering you an exceptional discount this month on all offers
        and the discounts start from -20%, come and go!
      </Text>
    </Container>
  );
};

export default Annonce;
