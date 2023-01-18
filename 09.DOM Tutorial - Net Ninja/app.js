let titles = Array.from(document.getElementsByClassName('title'));

//let wrap = document.querySelector("#wrapper");

let wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

let books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function (book) {
  book.textContent += ' (book title)';
})

let bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h1>Books and more books...</h1>';
bookList.innerHTML += '<p>This is how you add HTML</p>'

let banner = document.querySelector('#page-banner');
console.log('#page-banner node type is', banner.nodeType);

console.log('#page-banner has chiled nodes', banner.hasChildNodes());

let clonedBanner = banner.cloneNode();
console.log(clonedBanner);