import React, { Component } from "react";
import Clock from "../Clock";
import Content from "../Content";
import Converter from "../Converter";
import Application from "../Application";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handeler = () => {
    const { pageStatus } = this.props;
    if (pageStatus === "content") {
      return <Content></Content>;
    } else if (pageStatus === "clock") {
      return <Clock></Clock>;
    } else if (pageStatus === "application") {
      return <Application></Application>;
    } else {
      return <Converter></Converter>;
    }
  };

  render() {
    return <div>{this.handeler()}</div>;
  }
}

export default index;
