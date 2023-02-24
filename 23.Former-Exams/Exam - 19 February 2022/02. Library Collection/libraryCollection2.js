class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) { //? or w/t =
            throw new Error("Not enough space in the collection.")
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        const foundBook = this.books.find((b) => b.bookName === bookName);
        if (foundBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (foundBook.payed === true) {
            throw new Error(`${bookName} has already been paid.4`)
        }
        foundBook.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        const foundBookIndex = this.books.findIndex((b) => b.bookName === bookName);
        if (foundBookIndex === - 1) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (this.books[foundBookIndex].payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.splice(foundBookIndex, 1);
        return `${bookName} remove from the collection.`

    }
    getStatistics(bookAuthor) {
        const result = []

        if (bookAuthor === undefined) {
            result.push(`The book collection has 
            ${this.capacity - this.books.length} empty spots left.`);
            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach((book) => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`))
            return result.join('\n')    
        }
        const foundBooksAuthor = this.books.filter((book) => book.bookAuthor == bookAuthor)
        if(foundBooksAuthor.length >0) {
            foundBooksAuthor.forEach((book) =>
            result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`));
        } else {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
        return result.join("\n")
        
    }

}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid


