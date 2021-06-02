import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Posts {
  id: number;
  title: string;
  body: string;
}

export interface FetchPostsAction {
  type: ActionTypes.fetchPosts;
  payload: Posts[];
}

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Posts[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch<FetchPostsAction>({
      type: ActionTypes.fetchPosts,
      payload: response.data,
    });
  };
};
