function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(booksJson => {
      renderBooks(booksJson);

      if (booksJson.length >=5) {
        console.log('The 5th book in the series:', booksJson[4].name);
      }

      let totalPages = 0; 
      booksJson.forEach(book => {
        totalPages += book.numberOfPages;
      });
      console.log('Total number of pages of all books:', totalPages);
    })

    
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
