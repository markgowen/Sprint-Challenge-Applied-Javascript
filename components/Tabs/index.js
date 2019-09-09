// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');
let tabData = [];

function newTab(tabData) {
  const tab = document.createElement('div');

  tab.classList.add('tab');

  tab.textContent = tabData;

  return tab;
}

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function(response) {
    console.log(response);
    tabData = response.data.topics;
    tabData.forEach(topic => {
      topics.appendChild(newTab(topic));
    });
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(function() {});
