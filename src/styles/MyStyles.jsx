import styled from "styled-components";
import { Link } from "react-router-dom";

export const makeFlex = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StContainer = styled.div`
  ${makeFlex}
  overflow: auto;
`;

export const StHeader = styled.header`
  ${makeFlex}
  background-color: lightpink;
  padding: 2vh;
  margin-bottom: 2vh;
  height: 28vh;
`;

export const StFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: lightpink;
  padding: 2vh 0;
  margin-top: 2vh;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 7vh;
`;

export const StTitle = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 8vh;
`;

export const StLetter = styled(Link)`
  ${makeFlex}
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 3vh;
  padding: 1.5vh;
  width: 25vw;
  margin: 1.5vh 0 2.5vh 0;
  border: 0.2rem solid black;
  border-radius: 0.5rem;

  &:hover {
    background-color: lightgray;
  }
`;

export const StMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StLink = styled(Link)`
  ${makeFlex}
  background-color: ${(props) => (props.$check ? "lightcoral" : "black")};
  border-radius: 0.5rem;
  color: white;
  display: flex;
  margin: 0 0.5vw;
  padding: 1.5vh;
  font-size: 2vh;

  text-decoration: none;

  &:hover {
    background-color: ${(props) => (props.$check ? "gray" : "black")};
  }
`;

export const StForm = styled.form`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 48vh;
`;

export const StSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
`;

export const inputStyle = `
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 42vw;
`;

export const StInput = styled.input`
  ${inputStyle}
`;

export const StSelect = styled.select`
  ${inputStyle}
  width: 43.25vw;
`;

export const StTextarea = styled.textarea`
  resize: none;
  ${inputStyle}
`;

export const StButton = styled.button`
  ${inputStyle}
  background-color: white;
  width: auto;
  font-family: "nanum";
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const StItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 0.2rem solid black;

  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 48vh;
  gap: 1vh;
  flex-wrap: wrap;
  grid-auto-rows: 16vh;

  & h3 {
    text-align: center;
    margin-top: 2vh;
  }
`;

export const StItem = styled.div`
  ${makeFlex}
  padding: 1.5vh 0;

  &:hover {
    background-color: lightpink;
    cursor: pointer;
  }
`;

export const StModifyContainer = styled.div`
  ${makeFlex}
`;

export const StDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3 1fr);
  grid-template-rows: 0.1fr 0.1fr 1fr 0.1fr 0.1fr;
  grid-template-areas:
    "title title title"
    "addresser addresser time"
    "content content content"
    "modifyButton deleteButton backButton"
    "password password password";
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 48vh;


  & h3 {
    grid-area: title;
    text-align: center;
    margin-top: 2vh;
  }
  & .addresser {
    grid-area: addresser;
  }
  & .time {
    grid-area: time;
    text-align: right;
  }
  & .content {
    grid-area: content;
    margin: 1.5vh 0;
    white-space: break-spaces;
    height: 24vh;
    overflow-y: auto;
  }
  & .password {
    grid-area: password;
  }
  & .modifyButton {
    grid-area: modifyButton;
  }
  & .deleteButton {
    grid-area: deleteButton;
  }
  & .backButton {
    grid-area: backButton;
  }
`;

export const StImg = styled.img`
  ${makeFlex}
  border-radius: 0.5rem;
  height: 52vh;
`;

export const SearchInput = styled.input`
  padding: 1vh;
  margin-left: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 25vw;
`;

export const SearchButton = styled.button`
  ${inputStyle}
  background-color: white;
  padding: 1vh;
  width: auto;
  font-family: "nanum";
  font-size: 1.4vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const SearchSelect = styled.select`
  padding: 1vh;
  margin-left: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 10vw;
`;
