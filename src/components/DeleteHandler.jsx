import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { StButton, StSection, StInput } from "../styles/MyStyles";
import { deleteBoard } from "../redux/modules/BoardItems";

const DeleteHandler = () => {
  const [password, setPassword] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);
  const boardItems = useSelector((state) => state.boardItemsReducer.boardItems);

  const dispatch = useDispatch();
  const list = useLocation().state.list;
  const id = useLocation().state.id;
  const navigate = useNavigate();

  const backToList = () => {
    navigate(list, { replace: true });
  };

  const deleteHandler = () => {
    const target = boardItems.filter((element) => id === element.id);
    if (!passwordOpen) {
      setPasswordOpen(true);
    } else {
      if (password === target[0].password) {
        if (window.confirm("Really Remove This Letter?")) {
          dispatch(deleteBoard(...target));
          backToList();
        } else {
          setPassword("");
        }
      } else {
        alert("Wrong Password!");
        setPassword("");
      }
    }
  };

  return (
    <>
      <StButton className="backButton" onClick={backToList}>
        Back to List
      </StButton>
      <StButton className="deleteButton" onClick={deleteHandler}>
        Delete
      </StButton>
      {passwordOpen ? (
        <StSection className="password">
          <label>Password</label>
          <StInput
            id={id + "password"}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </StSection>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeleteHandler;
