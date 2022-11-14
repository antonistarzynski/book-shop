


fetch('https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/books-shop/books.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

const main = document.querySelector('main');


const h1 = document.createElement('h1');
h1.append('Book Shop');
main.append(h1);

const h1beta = document.createElement('h1');
h1beta.append('Hi, below are books which You can buy and read. Enjoy!');
main.append(h1beta);
h1beta.classList.add('h1beta');



const newImg = document.createElement('img');
newImg.src = "./books.json"

