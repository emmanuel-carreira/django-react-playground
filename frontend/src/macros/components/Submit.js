import React, { Component } from "react"

class Submit extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <button type="submit" onClick={this.props.func}>
          Enviar {this.props.name}
        </button>
      </div>
    );
  }
}

export default Submit;