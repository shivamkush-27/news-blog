// Mediastack API
const API_KEY = "309e4c83f9ba054b7a3f92b0c76dd792";
const url = "http://api.mediastack.com/v1/news";
window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${url}?access_key=${API_KEY}&countries=${query}`);
  const data = await res.json();
  bindData(data.data);
}

function bindData(data) {
  const cardsContainer = document.getElementById('cards-container');
  const newsCardTemplate = document.getElementById('template-news-card');
  cardsContainer.innerHTML = "";
  data.forEach((article) => {
    if (!article.image) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector('#news-img');
  const newsTitle = cardClone.querySelector('#news-title');
  const newsSource = cardClone.querySelector('#news-source');
  const newsDesc = cardClone.querySelector('#news-desc');
  newsImg.src = article.image;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;
  const date = new Date(article.published_at).toLocaleString("en-gb", {
    timeZone: "Asia/Kolkata"
  });
  newsSource.innerHTML = `${article.source} • ${date}`;
}
