import React, { Component } from "react";
import { render } from "react-dom";
import Input_grams from "./Input_grams"

class App_macros extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Me fala teus macros!</h1>
        <Input_grams key="protein_input" input_name="Proteína"/>
        <Input_grams key="fat_input" input_name="Gordura"/>
        <Input_grams key="carb_input" input_name="Carboidratos"/>
      </div>
    );
  }
}

export default App_macros;

const container = document.getElementById("app_macros");
render(<App_macros />, container)