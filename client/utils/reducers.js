import { useReducer } from "react";
import {
LIKE_PICTURES,
ADD_COMMENTS,
SHARE_PICTURES,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
      case LIKE_PICTURES:
        return {
          ...state,
          likes: [...state.likes, action.likes],
        };
  
      case ADD_COMMENTS:
        return {
          ...state,
          comments: [...state.cart, action.comments],
        };
  
      case SHARE_PICTURES:
        return {
          ...state,
          shares: [...state.shares, action.shares],
        };
    }};