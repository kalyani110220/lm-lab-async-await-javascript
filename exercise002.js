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

const apiEndpoint = "https://getrit.com/API/Token?ref=apilist.fun";
fetchData(apiEndpoint);
