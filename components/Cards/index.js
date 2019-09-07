// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

let articleData = {};

function createArticle(articleData) {
  const article = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  article.append(headline);
  article.append(author);
  author.appendChild(authorImg);
  author.appendChild(authorName);

  article.classList.add('card');
  article.classList.add('headline');
  author.classList.add('author');
  authorImg.classList.add('img-container');
  authorName.classList.add('span');

  headline.textContent = articleData.headline;
  authorImg.src = articleData.authorPhoto;
  authorName.textContent = articleData.authorName;

  console.log(article);
  return article;
}

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function(response) {
    console.log(response);
    articleData = response.data.articles;
    Object.keys(articleData).forEach(function(item) {
      console.log(item);
      console.log(articleData[item]);
      cardsContainer.appendChild(createArticle(articleData));
    });
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(function() {});

//   axios
//   .get('https://lambda-times-backend.herokuapp.com/articles')
//   .then(function(response) {
//     console.log(response);
//     articleData = response.data.articles;
//     console.log('This is the article data');
//     Object.keys(articles).forEach(function (item) {
//         console.log(item);
//         console.log(articles[item]);
//         cardsContainer.appendChild(createArticle(articleData));
//       });
//     });
//   .catch(function(error) {
//     console.log(error);
//   })
//   .finally(function() {});
