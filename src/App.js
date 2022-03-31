import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.medidor = this.medidor.bind(this);
  }

  medidor(e) {
    let arr = e.target.value.split("");
    this.setState({
      counter: arr.length,
    });
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.medidor}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
