import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { modifyBoard } from "../redux/modules/BoardItems";
import {
  StButton,
  StSection,
  StInput,
  StTextarea,
  StModifyContainer,
} from "../styles/MyStyles";

function ModifyHandler(props) {
  const [password, setPassword] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [modifyOpen, setModifyOpen] = useState(false);
  const boardItems = useSelector((state) => state.boardItemsReducer.boardItems);
  const list = useLocation().state.list;
  const id = useLocation().state.id;

  const target = boardItems.filter((element) => id === element.id);
  const [newTitle, setNewTitle] = useState(target[0].title);
  const [newAddresser, setNewAddresser] = useState(target[0].addresser);
  const [newContent, setNewContent] = useState(target[0].content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modifyForm = () => {
    if (!passwordOpen) {
      setPasswordOpen(true);
    } else {
      if (password === target[0].password) {
        setModifyOpen(true);
      } else {
        alert("Wrong Password!");
        setPassword("");
      }
    }
  };

  const modifyHandler = () => {
    const newBoard = {
      id: target[0].id,
      title: newTitle,
      receiver: target[0].receiver,
      addresser: newAddresser,
      password: target[0].password,
      content: newContent.current,
    };
    dispatch(modifyBoard(newBoard));

    alert("Modified!");
    navigate(list);
  };

  return (
    <>
      {!modifyOpen ? (
        <>
          <h3>{props.element.title}</h3>
          <p className="addresser">from. {props.element.addresser}</p>
          <p className="content">{props.element.content}</p>
        </>
      ) : (
        <>
          <h3>Letter Modification</h3>
          <StModifyContainer className="content">
            <StSection>
              <label>Title</label>
              <StInput
                id={id + "title"}
                type="text"
                value={newTitle}
                maxLength={10}
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </StSection>
            <StSection>
              <label>Addresser</label>
              <StInput
                id={id + "addresser"}
                type="text"
                value={newAddresser}
                maxLength={5}
                onChange={(event) => setNewAddresser(event.target.value)}
              />
            </StSection>
            <StSection>
              <label>Content</label>
              <StTextarea
                id={id + "content"}
                rows={5}
                value={newContent}
                maxLength={100}
                onChange={(event) => setNewContent(event.target.value)}
              />
            </StSection>
          </StModifyContainer>
        </>
      )}
      <StButton
        className="modifyButton"
        onClick={!modifyOpen ? modifyForm : modifyHandler}
      >
        Modify
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
}

export default ModifyHandler;
