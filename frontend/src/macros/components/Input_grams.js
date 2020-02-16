import React, { Component } from "react";

class Input_grams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h3>{this.props.input_name}</h3>
        <input
          type="text"
          placeholder="Quantidade em gramas"
          value={this.state.value}
          onChange={this.handleChange}
        >
        </input>
      </div>
    );
  }
}

export default Input_grams;