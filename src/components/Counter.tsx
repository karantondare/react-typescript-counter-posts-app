import React, { Component } from "react";

interface CounterProps {
  color: string;
}

interface CounterState {
  counter: number;
}

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "150px",
          margin: "1rem auto",
        }}
      >
        <h2
          style={{
            color: this.props.color,
            margin: "0 auto",
            fontSize: "1.5rem",
          }}
        >
          Counter App
        </h2>
        <button onClick={this.onDecrement}>- Decrement</button>
        <p
          style={{
            color: this.props.color,
            margin: "0 auto",
            fontSize: "1.5rem",
          }}
        >
          {this.state.counter}
        </p>{" "}
        <button onClick={this.onIncrement}>+ Increment</button>
      </div>
    );
  }
}
