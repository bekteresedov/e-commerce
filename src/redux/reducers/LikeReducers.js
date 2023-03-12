import { ADD_LIKE, DELETE_LIKE } from "../types/LikeTypes";

const INITIAL_STATE = {
  likes: [],
};

export const LikeReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIKE:
      let like = {
        id: action.payload.id,
        name: action.payload.title,
        image: action.payload.image,
        price: action.payload.price,
      };
      state.likes.push(like);
      break;
    case DELETE_LIKE:
      return {
        ...state,
        likes: state.likes.filter((like) => {
          return like.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
