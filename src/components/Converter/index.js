import React, { Component } from "react";

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toman: "",
      dollar: ""
    };
  }

  render() {
    return (
      <div className="container">
        <form>
          <div class="form-row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.toman}
                onChange=""
              ></input>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.dollar}
                onChange=""
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Converter;
