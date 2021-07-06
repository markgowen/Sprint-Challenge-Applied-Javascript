// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');
let data = {
     date: 'March 28, 2019',
     h1: 'Lambda Times',
     temp: '98°',
    
};

function Header(data) {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    header.classList.add('header');
    headerDate.classList.add('date');
    headerTitle.classList.add('h1');
    headerTemp.classList.add('temp');

    headerDate.textContent = data.date;
    headerTitle.textContent = data.h1;
    headerTemp.textContent = data.temp;

    return header;
}

headerContainer.appendChild(Header(data));