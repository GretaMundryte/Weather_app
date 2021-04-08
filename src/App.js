import logo from "./img/logo.webp";
import "./App.css";
import WeatherList from "./Weather/WeatherList";

function App() {
  return (
    <div className="container-fluid p-3">
      <div className="navbar-brand fw-bold" href="index.html">
        <img src={logo} alt="weather logo" width="70" height="60"></img>
        Weather Room
      </div>
      <div className="container p-3">
        <h1 className="text-center">Weather in Vilnius city</h1>
        <hr></hr>
      </div>
      <div className="container col-5 text-white p-3">
        <div className="align-middle">
          <h3 className="text-center">5 days forecast</h3>
        </div>
      </div>

      <WeatherList />

      <section className="container-fluid p-5">
        <div className="container row justify-content-between">
          <div className="col-3 text-white">
            <div className="text-left">
              <h2>
                Weather <span className="text-warning">Room</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porttitor sodales elit in porttitor. Nam non auctor ex, vel
                commodo sem.
              </p>
            </div>
          </div>

          <div className="w3-display-bottomleft w3-padding-large text-white">
            <p>
              Source link{" "}
              <a
                href="https://www.orai24.lt/orai/vilnius/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                orai24.lt
              </a>
            </p>
            <p>
              Powered by{" "}
              <a
                href="https://openweathermap.org/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                openweathermap.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
