import React from "react";
import Days from "./Components/Days";
import Icon from "./Components/Icon";
import Temp from "./Components/Temp";

function WeatherItem(props) {
  return (
    <div className="col-md-2">
      <div className="card">
        <div className="card-body">
          <Days day={props.day} />
          <Icon icon={props.icon} />
          <Temp dayTemp={props.dayTemp} nightTemp={props.nightTemp} />
          <a
            href="https://www.orai24.lt/orai/vilnius/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning d-flex justify-content-center"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
}

export default WeatherItem;
