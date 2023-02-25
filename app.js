var titles = document.getElementsByClassName("title");

// TO CHECK IF SOMETHING IS AN ARRAY (true or false)
// console.log(Array.isArray(titles));

// TO CONVERT HTML ELEMENT TO AN ARRAY
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// var wrap = document.querySelector('#wrapper');
// console.log(wrap);

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// console.log(Array.isArray(books));

// books.forEach(function(book){
//     // console.log(book.textContent);'
//     // book.textContent = 'test';
//     // book.textContent += ' (book title)';
// })

// const bookList = document.querySelector('#book-list');
// // console.log(bookList.innerHTML);
// // bookList.innerHTML = '<h2>Books and more books....</h2>';
// bookList.innerHTML += '<p>This is how we add HTML</p>';


// TO FIND OUT THE NODE TYPE

// const banner = document.querySelector('#page-banner');
// console.log(banner);

// console.log('#page-banner node type is:', banner.nodeType);

// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());


// TO CLONE THE NODE

// const cloneBanner = banner.cloneNode(true);

// NO NESTED CHILDREN

// const cloneBanner = banner.cloneNode(false);

// console.log(cloneBanner);

// TRAVERSING FROM CHIDREN TO PARENT AND VICE-VERSA

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:', bookList.parentNode);

// console.log('the parent element is:', bookList.parentElement);

// console.log('the parent element is:', bookList.parentElement.parentElement);

// console.log(bookList.childNodes);

// console.log(bookList.children);

// TRAVERSING FROM SIBLINGS TO SIBLINGS

// const bookList = document.querySelector('#book-list');

// console.log('#book-list next sibling is:', bookList.nextSibling);

// console.log('#book-list next element sibling is:', bookList.nextElementSibling);

// console.log('#book-list previous sibling is:', bookList.previousSibling);

// console.log('#book-list previous element sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML = '<br /> Too coll for everyone else!';

var h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
})