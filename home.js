// run through the array and count the total number of books
function getTotalBooksCount(books) {
  return books.length;
 }

 // run through the array and count the total number of accounts
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
 let booksBorrowed = 0;
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned == false){
    booksBorrowed++
    }
  }
  return booksBorrowed;
}

function getMostCommonGenres(books) {
  let result = [];
  let genre = books.forEach((book) => {
    if (result[book.genre] == null) {
      result[book.genre] = 1;
    }
    else {
      result[book.genre] += 1;
    }
  });
  let countTotal = [];
  for (const [key, value] of Object.entries(result)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}  


function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
    }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
  }


  function getMostPopularAuthors(books, authors) {
    let finalArray = []
    let result = {}
    const authorVars = authors.forEach((author) => {
      const id = author.id
      const { name: {first, last} } = author
      const authorName = `${first} ${last}`
     
        books.forEach((book) => {
          const borrowed = book.borrows.length
          if (book.authorId === id) {
              if (!finalArray.some((authorObj) => authorObj["name"] === authorName)) {
                result = { name: authorName, count: borrowed}
                finalArray.push(result)
              } 
                else {
                  const foundAuthor = finalArray.find((authorObj) => authorObj["name"] === authorName)
                  foundAuthor.count += borrowed
                }
              }
          })
      })
    const sorted = finalArray.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
    sorted.length = 5
    return sorted
  }
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
