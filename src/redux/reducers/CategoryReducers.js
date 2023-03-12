import { GET_CATEGORIES } from "../types/CategoryTypes";

const INITAL_STATE = {
    categories: [],
  };


  export const CategoryReducers=(state=INITAL_STATE,action)=>{

    switch (action.type) {
        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.payload
            }
    
        default:
            return state;
    }
  }