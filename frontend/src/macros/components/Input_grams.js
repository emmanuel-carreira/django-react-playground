import React, { Component } from "react";

class Input_grams extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.input_name}</h3>
        <input type="text" placeholder="Quantidade em gramas"></input>
      </div>
    );
  }
}

export default Input_grams;