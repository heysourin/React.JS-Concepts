export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7a382814f9msh1305d39d63fdfdcp169314jsn0d3dbd389873",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error("Could not catch Geo API", error);
// }

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "6844202ad1c73e52ad552f59339ef594";
