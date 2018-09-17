import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  render() {
    console.log(this.state.color);
    return (
      <div
        className={"cell"}
        style={{ backgroundColor: this.state.color }}
        onClick={() => {
          this.setState({
            color: "#333"
          });
        }}
      />
    );
  }
}
