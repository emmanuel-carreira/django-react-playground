import React, { Component } from "react";
import { render } from "react-dom";
import Input_grams from "./Input_grams"
import Submit from "./Submit"

class App_macros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proteins: '',
      fats: '',
      carbohydrates: '',
    };

    this.send = this.send.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue (key, value) {
    this.setState({[key]: value});
  }

  send(event){
    // Makes some ajax request here. WIP.
  }

  render () {
    return (
      <div>
        <h1>Me fala teus macros!</h1>
        <Input_grams key="protein_input" input_name="Proteína" func={this.setValue} input_key='proteins'/>
        <Input_grams key="fat_input" input_name="Gordura" func={this.setValue} input_key='fats'/>
        <Input_grams key="carb_input" input_name="Carboidratos" func={this.setValue} input_key='carbohydrates'/>
        <Submit key="submit_button" name="macros" func={this.send}/>
      </div>
    );
  }
}

export default App_macros;

const container = document.getElementById("app_macros");
render(<App_macros />, container)