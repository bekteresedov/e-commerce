import { ADD_LIKE, DELETE_LIKE } from "../types/LikeTypes";

export function AddLike(payload) {
    return {
      type: ADD_LIKE,
      payload,
    };
  }
  
  export function DeleteLike(payload) {
    return {
      type: DELETE_LIKE,
      payload,
    };
  }