const API_KEY = "568d5bb1c81441ce80bdb693e01e54ca";
const url = "https://newsapi.org/v2/everything?q=";
window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query){
   const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
   const data = await res.json();
   bindData(data.articles);
}
function bindData(articles){
   const cardsContainer = document.getElementById('cards-container');
   const newsCardTemplate = document.getElementById('template-news-card');
   cardsContainer.innerHTML = "";
   articles.forEach((article)=>{
      if(!article.urlToImage) return;
      const cardClone = newsCardTemplate.content.cloneNode(true);
      fillDataInCard(cardClone, article);
      cardsContainer.appendChild(cardClone);
   });
}

function fillDataInCard(cardClone, article){
   const newsImg =cardClone.querySelector('#news-img');
   const newsTitle =cardClone.querySelector('#news-title');
   const newsSource =cardClone.querySelector('#news-source');
   const newsDesc =cardClone.querySelector('#news-desc');
   newsImg.src = article.urlToImage;
   newsTitle.innerHTML = article.title;
   newsDesc.innerHTML = article.description;
   const date = new Date(article.publishedAt).toLocaleString("en-gb",{
      timeZone: "Asia/Kolkata"
   });
   newsSource.innerHTML = `${article.source.name} • ${date}`;
}