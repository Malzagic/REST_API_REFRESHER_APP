import axios from "axios";
import HttpError from "../models/http-error.js";

async function getCoordsForAddress(address) {
  // is only for connecting google maps

  // const response = await axios.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${API_KEY}`
  // );

  // const data = response.data;

  // if (!data || data.status === "ZERO_RESULTS") {
  //   const error = new HttpError(
  //     "Could not find location for the specified address.",
  //     422
  //   );

  //   throw error;
  // }

  // const coordinates = data.results[0].geometry.location;

  //   If api wont work
    return {
      lat: 40.7484474,
      lod: -73.9871516,
    };

  // return coordinates;
}

export { getCoordsForAddress };
