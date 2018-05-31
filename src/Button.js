import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    //set state method in react
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <button className="customButton" onClick={this.handleClick}>
        Clicked me {this.state.counter} times
      </button>
    );
  }
}

export default Button;
