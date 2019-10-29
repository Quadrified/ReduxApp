import { INCREMENT, DECREMENT, CLEAR } from "./types";

export const counterIncrement = () => {
  return {
    type: INCREMENT,
  };
};

export const counterDecrement = () => {
  return {
    type: DECREMENT,
  };
};

export const counterClear = () => {
    return {
        type : CLEAR
    }
}