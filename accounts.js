// function using two parameters
// defined const that equals account
// if that account matches the account id, return the id object
function findAccountById(accounts, id) {
  const foundId = accounts.find((account) => account.id === id);
  return foundId;
}

// function that uses array from accounts 
// sort accounts in alphabetical order using sort method, making all objects lowercase
// compare the last name of account A with the last name in account B
function sortAccountsByLastName(accounts) {
  accounts.sort((A, B) => A.name.last.toLowerCase() > B.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

// loop through accounts id's
// loop through borrowed books id's
// check if the borrow id matches account id, return count
// returned books borrowed = false
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let i = 0; i < books.length; i++) {
    for (let k = 0; k < books[i].borrows.length; k++) {
      if (books[i].borrows[k].id == account.id) {
        result++
      }
    }
  }
  return result
}

// get the accounts that have borrowed each book
// check that the account id matches the book id
// return a list of books, include the author object
function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].id === account.id){
      books[i].author = authors.find(author => author.id == books[i].authorId)
      result.push(books[i])
    }
  }
return result
 }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
