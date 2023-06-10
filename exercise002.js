import fetch from "node-fetch";

const fetchData = async (apiEndpoint) => {
  
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  console.log(data);
 } 
 const apiEndpoint = "https://getrit.com/API/Token?ref=apilist.fun";
 
 fetchData(apiEndpoint);

