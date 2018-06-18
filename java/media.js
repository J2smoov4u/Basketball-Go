// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const espn = document.getElementById('espn');
const fox = document.getElementById('fox');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = '5e510152b2a3459ab13a6560cf4dd606';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=5e510152b2a3459ab13a6560cf4dd606';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey=5e510152b2a3459ab13a6560cf4dd606';
const espnUrl = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=5e510152b2a3459ab13a6560cf4dd606';
const foxUrl = 'https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=5e510152b2a3459ab13a6560cf4dd606';

// Request News Function
// German News
async function getNews(url) {
  try {
    let response = await fetch(engadgetUrl);
    if (response.ok) {
      let jsonResponse = await response.json();
     		console.log(jsonResponse);
      let articlesArray = jsonResponse.articles.slice(0,5);
      	console.log(articlesArray);
      return articlesArray;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }

}
// Request Recode Function
//Tech News
async function getRecode(url) {
  try {
    let response = await fetch(recodeUrl);
    if (response.ok) {
      let jsonResponse = await response.json();
     		console.log(jsonResponse);
      let articlesArray = jsonResponse.articles.slice(0,5);
      	console.log(articlesArray);
      return articlesArray;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }

}
// Request ESPN Function
//ESPN sports news
async function getEspn(url) {
  try {
    let response = await fetch(espnUrl);
    if (response.ok) {
      let jsonResponse = await response.json();
     		console.log(jsonResponse);
      let articlesArray = jsonResponse.articles.slice(0,5);
      	console.log(articlesArray);
      return articlesArray;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }

}
// Request Fox News
// Fox Sports
async function getFox(url) {
  try {
    let response = await fetch(foxUrl);
    if (response.ok) {
      let jsonResponse = await response.json();
     		console.log(jsonResponse);
      let articlesArray = jsonResponse.articles.slice(0,5);
      	console.log(articlesArray);
      return articlesArray;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }

}
// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' + '<a href="https://twitter.com/JamesDMcDougald" target="_blank"><button type="button" class="tweet" id="tweet ' + article.index + '">' +
      '<i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +

      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      // Call Post Status function here
      Twitter.postStatus(newsObjects[i].url);
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getRecode(recodeUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

espn.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getEspn(espnUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

fox.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getFox(foxUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);
