import React, { Component } from "react";
import moment from "moment";

class Days extends Component {
  render() {
    return (
      <h5 className="card-title text-center text-dark">
        {moment().add(this.props.day, "days").format("DD-MM")}
      </h5>
    );
  }
}

export default Days;
