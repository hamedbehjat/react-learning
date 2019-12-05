import React, { Component } from "react";
import axios from "axios";

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toman: "",
      dollar: "",
      nerkh: "10000",
      loading: false
    };
  }

  getNerkhOnline = () => {
    this.setState({ loading: true });

    console.log(this.state.nerkh);

    axios
      .get("https://a.anardoni.com/pay/currency")
      .then(res => {
        this.setState({ nerkh: res.data.currency });
        this.setState({ loading: false });
        console.log(this.state.nerkh);
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ loading: false });
      });
  };

  changeStateDollar = (eventName, eventVal) => {
    this.setState({ dollar: eventVal }, () => {
      this.syncData(eventName, eventVal);
    });
  };

  changeStateToman = (eventName, eventVal) => {
    this.setState({ toman: eventVal }, () => {
      this.syncData(eventName, eventVal);
    });
  };

  syncData = (eventName, eventVal) => {
    if (eventName === "dolar") {
      if (eventVal === "") {
        this.setState({
          toman: "",
          dollar: ""
        });
      } else {
        let temp = parseInt(eventVal) * parseInt(this.state.nerkh);
        this.setState(
          {
            toman: temp.toString()
          },
          () => {
            console.log("toman: " + this.state.toman);
            console.log("dollar: " + this.state.dollar);
            console.log("*************************************");
          }
        );
      }
    } else if (eventName === "toman") {
      if (eventVal === "") {
        this.setState({
          toman: "",
          dollar: ""
        });
      } else {
        let temp = parseInt(eventVal) / parseInt(this.state.nerkh);

        this.setState(
          {
            dollar: temp.toString()
          },
          () => {
            console.log("toman: " + this.state.toman);
            console.log("dollar: " + this.state.dollar);
            console.log("*************************************");
          }
        );
      }
    } else {
      let tempDollar = parseInt(this.state.toman) / parseInt(this.state.nerkh);

      this.setState(
        {
          dollar: tempDollar.toString()
        },
        () => {
          console.log("toman: " + this.state.toman);
          console.log("dollar: " + this.state.dollar);
          console.log("*************************************");
        }
      );
    }
  };

  componentDidMount() {
    setTimeout(this.getNerkhOnline, 5000);
    // this.getNerkhOnline();
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-row">
            <div className="col-3 my-3">
              <input
                type="text"
                name="nerkh"
                placeholder="Fee"
                className="form-control"
                value={this.state.nerkh}
                disabled={this.state.loading}
                onChange={e => {
                  const eventName = e.target.name;
                  this.setState({ nerkh: e.target.value }, () => {
                    this.syncData(eventName);
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col-6">
              <input
                type="text"
                placeholder="dolar"
                name="dolar"
                className="form-control"
                value={this.state.dollar}
                onChange={e => {
                  const eventName = e.target.name;
                  const eventVal = e.target.value;
                  this.changeStateDollar(eventName, eventVal);
                }}
              ></input>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Toman"
                name="toman"
                className="form-control"
                value={this.state.toman}
                onChange={e => {
                  const eventName = e.target.name;
                  const eventVal = e.target.value;
                  this.changeStateToman(eventName, eventVal);
                }}
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Converter;
