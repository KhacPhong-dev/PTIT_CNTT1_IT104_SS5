"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book5);
library.listBooks();
