import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: none;
  width: 120px;
  border-radius: 5px;
  padding: 20px;
  background-color: teal;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Pay = () => {
  return (
    <Container>
      <StripeCheckout >
        <Button>PAY NOW</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
