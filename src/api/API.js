import axios from "axios";
import * as mockBlogPosts from './mockBlogPosts';

export default {
  getRandomCatFact: function () {
    return axios.get("https://catfact.ninja/fact");
  },
  getCatFacts: function () {
    return axios.get("https://catfact.ninja/facts?limit=6");
  },
  getBlogPosts: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockBlogPosts);
      }, 1000);
    });
  }
};
