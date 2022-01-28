function findAuthorById(authors, id) {
  const foundId = authors.find((author) => author.id === id);
  return foundId;
}

function findBookById(books, id) {
  const foundId = books.find((book) => book.id === id);
  return foundId;
}

// return one array that includes two arrays, borrowed books and returned books
function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = [];
  let returnedBooks = [];
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      borrowedBooks.push(books[i])
    }
    else {
      returnedBooks.push(books[i]);
    }
  }
  
  return [borrowedBooks,returnedBooks]
}

// list of 10 borrowers
// return an array for a book with their information & return status
function getBorrowersForBook(book, accounts) {
  let bookBorrower = [];
  for (let i = 0; i < book.borrows.length; i++){
    const account = accounts.find(account => account.id == book.borrows[i].id)
    account.returned = book.borrows[i].returned 
    bookBorrower.push(account);
    }
    return bookBorrower.slice(0,10);
  }


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
