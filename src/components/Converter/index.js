import React, { Component } from "react";

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toman: "",
      dollar: ""
    };
  }

  syncData = (event) => {
    // console.log(typeof(event.target.name));
    if( event.target.name === "dolar"){
      
        console.log(event.target.value);
        let temp = event.target.value * 13000;
        console.log(temp);
        this.setState({toman : temp,dollar:event.target.value});
    }else{
     
      console.log(event.target.name);
     
      
      let temp = parseInt(event.target.value) /13000; 
      console.log(temp);
      this.setState({toman : temp.toString(),dollar :event.target.value.toString() });
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
                // value={this.state.toman}
                onChange={this.syncData}
              ></input>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="toman"
                name="toman"
                className="form-control"
                value={this.state.dollar}
                onChange={this.syncData}
                // onChange="{this.syncData}"
              ></input>
            </div>
          </div>
        </form>
      </div>
      // <input type="text" onChange={(e)=>{console.log(e.target.value);
      // }}/>
    );
  }
}

export default Converter;
