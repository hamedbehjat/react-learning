import React, { Component } from "react";

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toman: "",
      dollar: ""
    };
  }

  syncData = event => {
    // console.log(typeof(event.target.name));
    if (event.target.name === "dolar") {
      console.log("if running");
      console.log(
        "target name: " +
          event.target.name +
          " - target value: " +
          event.target.value
      );
      console.log("type of target value: " + typeof event.target.value);

      let temp = parseInt(event.target.value) * 12000;
      console.log(temp);
      console.log(typeof temp);

      this.setState({
        toman: temp.toString(),
        dollar: event.target.value.toString()
      });

      console.log("toman: " + this.state.toman);
      console.log("dollar: " + this.state.dollar);
      console.log("type of toman: " + typeof this.state.toman);
      console.log("type of dolar: " + typeof this.state.dollar);

      console.log("*************************************");
    } else {
      console.log("else running");
      console.log(
        "target name: " +
          event.target.name +
          " - target value: " +
          event.target.value
      );
      console.log("type of target value: " + typeof event.target.value);

      let temp = parseInt(event.target.value) / 12000;

      console.log(temp);
      this.setState({
        toman: event.target.value.toString(),
        dollar: temp.toString()
      });

      console.log(temp);
      console.log(typeof temp);

      console.log("type of toman: " + typeof this.state.toman);
      console.log("type of dolar: " + typeof this.state.dollar);

      console.log("*************************************");
    }
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-row">
            <div className="col-6">
              <input
                type="text"
                placeholder="dolar"
                name="dolar"
                className="form-control"
                value={this.state.dollar}
                onChange={this.syncData}
              ></input>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Toman"
                name="toman"
                className="form-control"
                value={this.state.toman}
                onChange={this.syncData}
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Converter;
