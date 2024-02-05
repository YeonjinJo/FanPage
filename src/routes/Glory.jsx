import React from "react";
import theGlory from "../assets/img/theGlory.jpeg";

import { StContainer, StImg } from "../styles/MyStyles";

const Glory = () => {
  return (
    <StContainer>
      <StImg src={theGlory} alt="The Glory Yeonjin" />
    </StContainer>
  );
};

export default Glory;
