const axios = require("axios");
exports.getWeather = async (req, res) => {
  const { city } = req.query;
  const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`;
  try {
    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    res.status(500).send("Weather fetch failed");
  }
};
