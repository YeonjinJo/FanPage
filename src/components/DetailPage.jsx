import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { StDetailContainer } from "../styles/MyStyles";
import DeleteHandler from "./DeleteHandler";
import ModifyHandler from "./ModifyHandler";

const DetailPage = () => {
  const boardItems = useSelector((state) => state.boardItemsReducer.boardItems);
  const id = useLocation().state.id;
  
  return (
    <>
      {boardItems
        .filter((element) => id === element.id)
        .map((element) => {
          return (
            <StDetailContainer key={element.id}>
              <ModifyHandler element={element}/>
              <DeleteHandler />
            </StDetailContainer>
          );
        })}
    </>
  );
};

export default DetailPage;
