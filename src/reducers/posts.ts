import { Posts, FetchPostsAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const postsReducers = (
  state: Posts[] = [],
  action: FetchPostsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchPosts:
      return action.payload;
    default:
      return state;
  }
};
