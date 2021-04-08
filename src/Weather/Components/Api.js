import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=54.687157&lon=25.279652&exclude=current,minutely,hourly,alerts&appid=4e918aa14021050fe42a07d619f04e54";

export const getWeatherData = async () => {
  const { data } = await axios.get(url);
  return data.daily.slice(0, 5);
};
