import React, { Component } from "react";
import { connect } from "react-redux";
import { Posts, fetchPosts } from "../actions";
import { StoreState } from "../reducers";
import Counter from "./Counter";

interface AppProps {
  posts: Posts[];
  fetchPosts(): any;
}

class _App extends Component<AppProps> {
  onButtonClick = (): void => this.props.fetchPosts();

  renderList(): JSX.Element[] {
    return this.props.posts.map((post: Posts) => {
      return (
        <div
          key={post.id}
          style={{
            border: "1px solid #707070",
            margin: "1rem",
            padding: "0.5rem",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Counter color="red" />
        <div>
          <button
            style={{ marginLeft: "1rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={this.onButtonClick}
          >
            Fetch Posts
          </button>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }: StoreState): { posts: Posts[] } => {
  return { posts: posts };
};

export const App = connect(mapStateToProps, { fetchPosts })(_App);
