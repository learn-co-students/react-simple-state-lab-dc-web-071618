import React, { Component } from "react";


export default class Cell extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }


  clicker = () => {
    this.setState({
      color: '#333'
    })
  }

  render(){
    return (
      <div
        className="cell" s
        tyle={{backgroundColor: '#FFF'}}
        onClick={this.clicker}>
      </div>
    )
  }

}
