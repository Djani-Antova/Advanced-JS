class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
 
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
 
        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
 
    payBook(bookName) {
        const foundBook = this.books.find((b) => b.bookName === bookName);
        if (foundBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (foundBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        foundBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }
 
    removeBook(bookName) {
        const foundBookIndex = this.books.findIndex((b) => b.bookName === bookName);
        if (foundBookIndex === -1) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (this.books[foundBookIndex].payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(foundBookIndex, 1);
        return `${bookName} remove from the collection.`;
    }
 
    getStatistics(bookAuthor) {
        const result = [];
 
        if (bookAuthor === undefined) {
            result.push(`The book collection has 
            ${this.capacity - this.books.length} empty spots left.`);
            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach((book) => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`));
            return result.join('\n');
        }
        const foundBooksAuthor = this.books.filter((book) => book.bookAuthor === bookAuthor);
        if (foundBooksAuthor.length > 0) {
            foundBooksAuthor.forEach((book) =>
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`));
        } else {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        return result.join('\n');
    }
}

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));



// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.

