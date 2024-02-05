import React from "react";
import { useLocation } from "react-router-dom";

import { StHeader, StTitle, StMenuContainer, StLetter, StLink } from "../styles/MyStyles";
import Jobs from "../components/Jobs";

const Header = () => {
  const currentLocation = useLocation().pathname;

  return (
    <StHeader>
      <StTitle to={"/"}>YEONJIN UNIVERSE</StTitle>
      <StLetter to={"/letter"}>Leave Your Message</StLetter>
      <StMenuContainer>
        {Jobs().jobList.map((value, index) => {
          return (
            <StLink
              $check={currentLocation !== Jobs().path[index]}
              to={Jobs().path[index]}
              key={index}
            >
              {value}
            </StLink>
          );
        })}
      </StMenuContainer>
    </StHeader>
  );
};

export default Header;

