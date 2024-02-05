import { doc, setDoc, deleteDoc, updateDoc} from "firebase/firestore/lite";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

// Action value
const ADD_BOARD = "ADD_BOARD";
const DELETE_BOARD = "DELETE_BOARD";
const MODIFY_BOARD = "MODIFY_BOARD";

// Action Creator
export const addBoard = (input) => {
  return {
    type: ADD_BOARD,
    payload: {
      id: input.id,
      receiver: input.receiver,
      title: input.title,
      addresser: input.addresser,
      password: input.password,
      content: input.content,
    },
  };
};

export const deleteBoard = (input) => {
  return {
    type: DELETE_BOARD,
    payload: {
      id: input.id,
      receiver: input.receiver,
      title: input.title,
      addresser: input.addresser,
      password: input.password,
      content: input.content,
    },
  };
};

export const modifyBoard = (input) => {
  return {
    type: MODIFY_BOARD,
    payload: {
      id: input.id,
      receiver: input.receiver,
      title: input.title,
      addresser: input.addresser,
      password: input.password,
      content: input.content,
    },
  };
};

// initial State
const initialState = { boardItems: [] };
const snapshot = await getDocs(collection(db, "messages"));
snapshot.forEach((doc) => {
  initialState.boardItems.push(doc.data());
});

// Reducer
const boardItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      setDoc(doc(db, "messages", action.payload.id), action.payload);

      return {
        ...state,
        boardItems: [
          ...state.boardItems,
          {
            id: action.payload.id,
            receiver: action.payload.receiver,
            title: action.payload.title,
            addresser: action.payload.addresser,
            password: action.payload.password,
            content: action.payload.content,
          },
        ],
      };

    case DELETE_BOARD:
      deleteDoc(doc(db, "messages", action.payload.id));

      return {
        ...state,
        boardItems: state.boardItems.filter(
          (element) => action.payload.id !== element.id
        ),
      };

    case MODIFY_BOARD:
      updateDoc(doc(db, "messages", action.payload.id), action.payload);

      return {
        ...state,
        boardItems: [
          state.boardItems.filter(
            (element) => action.payload.id !== element.id
          ),
          {
            id: action.payload.id,
            receiver: action.payload.receiver,
            title: action.payload.title,
            addresser: action.payload.addresser,
            password: action.payload.password,
            content: action.payload.content,
          },
        ],
      };

    default:
      return state;
  }
};

export default boardItemsReducer;
