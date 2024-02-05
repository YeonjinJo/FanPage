import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { addBoard } from "../redux/modules/BoardItems";
import {
  StForm,
  StSection,
  StInput,
  StSelect,
  StTextarea,
  StButton,
} from "../styles/MyStyles";
import Jobs from "./Jobs";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [receiver, setReceiver] = useState("/job0");
  const [addresser, setAddresser] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const id = uuid();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Title is Empty!");
    } else if (!addresser) {
      alert("Addresser is Empty!");
    } else if (!password) {
      alert("Set Your Password!");
    } else if (!content) {
      alert("No Letter Content!");
    } else {
      if (window.confirm("Register Your Message?")) {
        const message = {
          id,
          title,
          receiver,
          addresser,
          password,
          content,
        };

        dispatch(addBoard(message));

        alert("Registered!");

        setTitle("");
        setAddresser("");
        setPassword("");
        setContent("")
      } else {
        alert("Cancelled");
      }
    }
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <StSection>
        <label>Title</label>
        <StInput
          id={id + "title"}
          type="text"
          value={title}
          placeholder="Title → Less than 10 char"
          maxLength={10}
          onChange={(event) => setTitle(event.target.value)}
        />
      </StSection>
      <StSection>
        <label>Receiver</label>
        <StSelect
          id={id + "receiver"}
          type="text"
          value={receiver}
          onChange={(event) => setReceiver(event.target.value)}
        >
          {Jobs().jobList.map((value, index) => (
            <option value={Jobs().path[index]} key={index}>
              {value + " Yeonjin"}
            </option>
          ))}
        </StSelect>
      </StSection>
      <StSection>
        <label>Addresser</label>
        <StInput
          id={id + "addresser"}
          type="text"
          value={addresser}
          placeholder="Addresser → Less than 5 char"
          maxLength={5}
          onChange={(event) => setAddresser(event.target.value)}
        />
      </StSection>
      <StSection>
        <label>Password</label>
        <StInput
          id={id + "password"}
          type="password"
          value={password}
          placeholder="Password → Less than 8 char"
          maxLength={8}
          onChange={(event) => setPassword(event.target.value)}
        />
      </StSection>
      <StSection>
        <label>Content</label>
        <StTextarea
          id={id + "content"}
          rows={5}
          value={content}
          placeholder="Content → Less than 100 char"
          maxLength={100}
          onChange={(event) => setContent(event.target.value)}
        />
      </StSection>

      <StButton>Send</StButton>
    </StForm>
  );
};

export default AddForm;
