import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
// import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageStatus: "application"
    };

    // this.handeler = this.handeler.bind(this);
  }

  // handeler = () => {
  //   if (this.state.pageStatus == "content") {
  //     return <Content></Content>;
  //   } else {
  //     return <Clock></Clock>;
  //   }
  // };

  handleStatus = pageName => {
    this.setState({
      pageStatus: pageName
    });
  };

  render() {
    return (
      <div className="main-content">
        <Navbar
          pageStatus={this.state.pageStatus}
          handleStatus={this.handleStatus}
          // {...this.props}
        ></Navbar>

        <Routes pageStatus={this.state.pageStatus}></Routes>
      </div>
    );
  }
}

export default App;
