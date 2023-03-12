import { GET_CATEGORIES } from "../types/CategoryTypes";

export const categoriesAction=()=>async (dispatch)=>{
    const data=await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json());
            dispatch({type:GET_CATEGORIES,payload:data});
}