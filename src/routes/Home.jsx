import React from "react";
import intro from "../assets/img/intro.png";

import { StContainer, StImg } from "../styles/MyStyles";

const Home = () => {
  return (
    <StContainer>
      <StImg src={intro} alt="Introduction to Yeonjin" />
    </StContainer>
  );
};

export default Home;

