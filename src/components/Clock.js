import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
      console.log(this.state.number);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="container">
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default Clock;
