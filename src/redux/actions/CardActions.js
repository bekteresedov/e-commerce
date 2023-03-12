import { ADD_CARD, DECREASE_QUANTITY, DELETE_ALL_CARDS, DELETE_CARD, INCREASE_QUANTITY } from "../types/CardTypes";

export function AddCard(payload) {
  return {
    type: ADD_CARD,
    payload,
  };
}

export function DeleteCard(payload) {
  return {
    type: DELETE_CARD,
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}
export function DeleteAllCards() {
  return {
    type: DELETE_ALL_CARDS,
  };
}
