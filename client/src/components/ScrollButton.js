import { ArrowDropUp } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  /* margin-bottom: 70px; */
`;
const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 80px;
  height: 20px;
  font-size: 3rem;
  z-index: 100;
  cursor: pointer;
  color: green;
  transition: all 0.5s ease;

  ${mobile({
    left: "80%",
    width: "0px",
    height: "40px",
    bottom: "30px",
  })}
`;

const Arrow = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10%;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Container>
      <Button style={{ display: visible ? "inline" : "none" }}>
        <Arrow onClick={scrollTop}>
          <ArrowDropUp
            style={{
              fontSize: "30px",
              color: "white",
            }}
          />
        </Arrow>
      </Button>
    </Container>
  );
};

export default ScrollButton;
