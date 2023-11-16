const API_KEY = "568d5bb1c81441ce80bdb693e01e54ca";
const url = "https://newsapi.org/v2/everything?q=";
window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query){
   const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
   const data = await res.json();
   console.log(data);
}