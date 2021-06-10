import axios from "axios";

export default {
  getRandomCatFact: function() {
    return axios.get("https://catfact.ninja/fact");
  },
  getCatFacts: function() {
    return axios.get("https://catfact.ninja/facts?limit=6");
  }
};
