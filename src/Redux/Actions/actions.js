import {
    CATEGORY_LIST,
    ADD_ITEM,
    INCREASE,
    DECREASE,
    REMOVE,
    CLEAR,
    SEARCH
  } from "../Constants/types";
  
  export const categoryList = (payload) => ({
    type: CATEGORY_LIST,
    payload
  });
  
  export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload
  });
  
  export const increase = (payload) => ({
    type: INCREASE,
    payload
  });
  
  export const decrease = (payload) => ({
    type: DECREASE,
    payload
  });
  
  export const remove = (payload) => ({
    type: REMOVE,
    payload
  });
  
  export const clear = (payload) => ({
    type: CLEAR,
    payload
  });
  
  export const search = (payload) => ({
    type: SEARCH,
    payload
  });
  
