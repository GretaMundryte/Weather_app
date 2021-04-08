import Clear from "../../img/clear.png";
import Clouds from "../../img/clouds.png";
import Rain from "../../img/rain.png";
import Storm from "../../img/storm.png";
import Snow from "../../img/snow.png";
import Thermometer from "../../img/thermometer.png";

const Icon = (props) => {
  switch (props.icon) {
    case "Clear":
      return <img src={Clear} alt="Clear" className="card-img-top mt-2"></img>;
    case "Clouds":
      return (
        <img src={Clouds} alt="Clouds" className="card-img-top mt-2"></img>
      );
    case "Rain":
      return <img src={Rain} alt="Rain" className="card-img-top mt-2"></img>;
    case "Storm":
      return <img src={Storm} alt="Storm" className="card-img-top mt-2"></img>;
    case "Snow":
      return <img src={Snow} alt="Snow" className="card-img-top mt-2"></img>;
    default:
      return (
        <img
          src={Thermometer}
          alt="Thermometer"
          className="card-img-top mt-2"
        ></img>
      );
  }
};

export default Icon;
