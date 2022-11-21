const main = document.querySelector('main');


const h1 = document.createElement('h1');
h1.append('Book Shop');
main.append(h1);

const h1beta = document.createElement('h1');
h1beta.append('Hi, below are books which You can get and read. Enjoy!');
main.append(h1beta);
h1beta.classList.add('h1beta');



const stuff = [
    {
        "author": "Douglas Crockford",
        "imageLink": "./covers/cover_1.jpg",
        "title": "JavaScript: The Good Parts",
        "price": 30,
        "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
    },
    {
        "author": "David Herman",
        "imageLink": "./covers/cover_2.jpg",
        "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
        "price": 22,
        "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
        "author": "David Flanagan",
        "imageLink": "./covers/cover_3.jpg",
        "title": "JavaScript: The Definitive Guide",
        "price": 40,
        "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
        "author": " Eric Elliott",
        "imageLink": "./covers/cover_4.jpg",
        "title": "Programming JavaScript Applications",
        "price": 19,
        "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
        "author": "Addy Osmani",
        "imageLink": "./covers/cover_5.jpg",
        "title": "Learning JavaScript Design Patterns",
        "price": 32,
        "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
        "author": "Boris Cherny",
        "imageLink": "./covers/cover_6.jpg",
        "title": "Programming TypeScript",
        "price": 28,
        "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
        "author": "Alex Banks, Eve Porcello",
        "imageLink": "./covers/cover_7.jpg",
        "title": "Learning React, 2nd Edition",
        "price": 25,
        "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
        "author": "Bradley Meck Alex Young and Mike Cantelon",
        "imageLink": "./covers/cover_8.jpg",
        "title": "Node.js in Action",
        "price": 38,
        "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
        "author": "Kyle Simpson",
        "imageLink": "./covers/cover_9.jpg",
        "title": "You Don't Know JS Yet: Get Started",
        "price": 26,
        "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
        "author": "John Resig and Bear Bibeault",
        "imageLink": "./covers/cover_10.jpg",
        "title": "Secrets of the JavaScript Ninja",
        "price": 33,
        "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
];


for (let i = 0; i < stuff.length; i++) {

    const books = document.querySelector("#books");

    const book = document.createElement('div');
    book.classList.add('book-square');

    ////// top section of the book
    const top = document.createElement('div');
    top.classList.add('top');

    const author = document.createElement('p');
    author.append(stuff[i].author);
    author.classList.add('author');
    top.append(author);

    const title = document.createElement('h4');
    title.append(stuff[i].title);
    title.classList.add('title');
    top.append(title);

    book.append(top);


    ///// image section
    const image = document.createElement('img');
    image.src = stuff[i].imageLink;
    image.classList.add('image');
    book.append(image);

    //// bottom section 
    const bottom = document.createElement('div')
    bottom.classList.add('bottom');

    const price = document.createElement('h5');
    price.append(`${stuff[i].price}$`);
    price.classList.add('price');
    bottom.append(price);

    /* bottom / info / */
    const info = document.createElement('button');
    info.append("info");
    info.classList.add('info');
    bottom.append(info);

    const infoBox = document.createElement('section');
    const textBook = document.createElement('p');
    const closeBtn = document.createElement('button');

    closeBtn.innerText = "close"
    closeBtn.classList.add('closeBtn');

    textBook.classList.add('pInfoBook');

    textBook.innerHTML = `${stuff[i].description}<br><br>`;
    textBook.append(closeBtn);

    infoBox.append(textBook);
    infoBox.classList.add('textInfo');

    bottom.append(infoBox);


    info.addEventListener("click", (e) => {
        infoBox.classList.toggle('hidden');
        let x = e.pageX;
        let y = e.pageY;
    })

    closeBtn.addEventListener("click", () => {
        infoBox.classList.toggle('hidden');
    })

    //// >>>> if i click somewhere else, also hidden
    //// >>>> "scroll history" - reset

    const buy = document.createElement('button');
    buy.append("buy");
    buy.classList.add('buyBtnStyle');
    buy.classList.add('buyBtn');
    bottom.append(buy);

    book.append(bottom);



    books.append(book);
    main.append(books);
}

const buy = document.querySelectorAll(".buyBtn");

const shopBox = document.createElement('div');
shopBox.classList.add("shopBox");

const boxContainer = document.createElement('section');
boxContainer.classList.add('boxContainer');
shopBox.append(boxContainer);



const boxList = document.createElement('ul');








const totalCost = document.createElement('h4');
let amount = 0;
//totalCost.append("total cost:" + amount)
totalCost.innerHTML += `total cost: ${amount} yolo`
totalCost.classList.add('boxh4');
boxContainer.append(totalCost);

const totalAmount = document.createElement('h4')
let itemsAmount = 0;
totalAmount.append("items:" + itemsAmount);
totalAmount.classList.add('boxh4')
boxContainer.append(totalAmount);

const boxh4 = document.createElement('h4')
boxh4.append("your basket:");
boxh4.classList.add('boxh4')
boxContainer.append(boxh4);

const orderBtn = document.createElement("button");
orderBtn.innerHTML = `<a href="./delivery.html">order</a>`
orderBtn.classList.add("orderBtn");
boxContainer.append(orderBtn);

shopBox.classList.toggle("visible");
main.append(shopBox);






buy[0].addEventListener("click", () => {

    shopBox.classList.remove("visible");

    /*
    boxItem.append(`Title: ${stuff[0].title}`);
    boxItem.append(stuff[0].author);
    boxItem.append(stuff[0].price);
*/

    const boxItem = document.createElement('li');
    boxItem.classList.add("empty");


    boxItem.innerHTML +=
        `<br><br>
Title:${stuff[0].title}<br>
Author:${stuff[0].author}<br>
Price:${stuff[0].price}<br><br>
`;



    totalCost.innerText = "";
    amount += stuff[0].price;
    totalCost.innerHTML += `total cost: ${amount} $`;
    totalCost.innerHTML += `<br>`

    totalAmount.innerText = "";
    itemsAmount++;
    totalCost.append("books amount: " + itemsAmount)

    const removeBtn = document.createElement("button");
    removeBtn.append("remove book");
    removeBtn.classList.add("removeBtn");
    boxItem.append(removeBtn);

    const listOfBooks = document.querySelector("ul");
    removeBtn.addEventListener("click", () => {
        listOfBooks.removeChild(listOfBooks.childNodes[1])

        totalAmount.innerText = "";
        itemsAmount--;
        totalCost.append("books amount: " + itemsAmount)

        totalCost.innerText = "";
        amount -= stuff[0].price;
        totalCost.innerHTML += `total cost: ${amount} $`;
        totalCost.innerHTML += `<br>`
    })

    // var ulElem = document.getElementById('myList');

    //ulElem.removeChild(ulElem.childNodes[i])




    boxList.append(boxItem);
    boxContainer.append(boxList);


})





