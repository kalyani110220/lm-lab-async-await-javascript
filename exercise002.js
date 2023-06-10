import fetch from "node-fetch";

const fetchData = async (apiEndpoint) => {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Example 1: Fetching data from the JSONPlaceholder API
const jsonPlaceholderEndpoint = "https://jsonplaceholder.typicode.com/posts";
fetchData(jsonPlaceholderEndpoint);

// Example 2: Fetching data from the Chuck Norris API
const chuckNorrisEndpoint = "https://api.chucknorris.io/jokes/random";
fetchData(chuckNorrisEndpoint);

// Example 3: Fetching data from the SpaceX API
const spaceXEndpoint = "https://api.spacexdata.com/v4/launches/latest";
fetchData(spaceXEndpoint);