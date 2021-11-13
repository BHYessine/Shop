import { data } from "../../Components/data";
import {
  CATEGORY_LIST,
  ADD_ITEM,
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR,
  SEARCH
} from "../Constants/types";
const initialState = data;

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        Category: action.payload
      };
    case ADD_ITEM:
      if (state.Cart.length === 0) {
        state.Cart.push(action.payload);
        state.Total = action.payload.price;
      } else {
        let check = false;
        const index = state.Cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.Cart.map((item) => {
          if (item.id === action.payload.id) {
            state.Total = state.Total + action.payload.price;
            state.Cart[index].amt++;
            check = true;
          }
        });
        if (!check) {
          state.Cart.push(action.payload);
          state.Total = state.Total + action.payload.price;
        }
      }
      return {
        ...state,
        Counter: state.Counter + 1
      };

    case INCREASE:
      const index = state.Cart.findIndex((item) => item.id === action.payload);
      const amt = state.Cart[index].amt;
      if (amt > 1) {
        state.Cart[index].amt--;
        state.Counter--;
        state.Total = state.Total - state.Cart[index].price;
      }
      return {
        ...state,
        Cart: [...state.Cart]
      };
    case DECREASE:
      const key = state.Cart.findIndex((item) => item.id === action.payload);
      state.Cart[key].amt++;
      state.Counter++;
      state.Total = state.Total + state.Cart[key].price;
      return {
        ...state,
        Cart: [...state.Cart]
      };
    case REMOVE:
      const id = state.Cart.findIndex((item) => item.id === action.payload);
      state.Counter = state.Counter - state.Cart[id].amt;
      state.Total = state.Total - state.Cart[id].price * state.Cart[id].amt;
      return {
        ...state,
        Cart: state.Cart.filter((item) => item.id !== action.payload)
      };
    case CLEAR:
      return {
        ...state,
        Cart: [],
        Total: 0,
        Counter: 0
      };
      case SEARCH:
        const keyword = action.payload
        if (keyword == "") {
          return {
            ...state,
            SearchList: state.Products            
          };
        } else {
          return{
            ...state,
            SearchList: state.Products.filter((item) => item.title.toLowerCase().startsWith(keyword.toLowerCase()))
          }
        }
        
    default:
      return state;
  }
};
