import React, { Component } from "react";
import WeatherItem from "./WeatherItem";
import { getWeatherData } from "./Components/Api";

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
  }

  async componentDidMount() {
    this.setState({
      days: await getWeatherData(),
    });
  }

  render() {
    return (
      <ul className="row text-white d-flex justify-content-center">
        {this.state.days.map((day, i) => {
          return (
            <WeatherItem
              day={i}
              icon={day.weather[0].main}
              dayTemp={Math.round(day.temp.day - 273.15)}
              nightTemp={Math.round(day.temp.night - 273.15)}
              key={i}
            />
          );
        })}
      </ul>
    );
  }
}

export default WeatherList;
