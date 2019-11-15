import axios from "axios";

const BASEURL = "https://api.restcountries.eu/rest/v2/alpha/col/search?q=";
const APIKEY = "&api_key=AIzaSyAMXRRIVN4OgSuca8ljOLWC63pzMmAJQvM=20";

// Export an object with a "search" method that searches the  API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


// "https://api.giphy.com/v1/gifs/search?q=";
// "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";