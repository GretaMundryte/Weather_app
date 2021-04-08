import React, { Component } from "react";

class Temp extends Component {
  render() {
    return (
      <div className="text-center p-2">
        <p className="text-danger">Day: {this.props.dayTemp}&#8451;</p>
        <p className="text-primary">Night: {this.props.nightTemp}&#8451;</p>
      </div>
    );
  }
}

export default Temp;
