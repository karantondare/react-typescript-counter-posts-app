import { combineReducers } from "redux";
import { Posts } from "../actions";
import { postsReducers } from "./posts";

export interface StoreState {
  posts: Posts[];
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducers,
});
