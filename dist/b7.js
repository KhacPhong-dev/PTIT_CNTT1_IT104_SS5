"use strict";
class Book1 {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
class Library1 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBook() {
        console.log("Danh sach sach trong thu vien:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(`${i + 1}. ${this.books[i].getTitle()} - ${this.books[i].getAuthor()}`);
        }
    }
    updateBook(id, newTitle, newAuthor) {
        for (const book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                break;
            }
        }
    }
}
const book3 = new Book1("The Great Gatsby", "F. Scott Fitzgerald", "1");
const book4 = new Book1("To Kill a Mockingbird", "Harper Lee", "2");
const library1 = new Library1();
library1.addBook(book3);
library1.addBook(book4);
library1.listBook();
