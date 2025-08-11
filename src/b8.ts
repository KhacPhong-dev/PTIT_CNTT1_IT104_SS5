
class Book2 {
    private title: string;
    private author: string;
    private id: string;

    constructor(title: string, author: string, id: string) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getId(): string {
        return this.id;
    }
}
class Library2 {
    private books: Book2[] = [];

    public addBook(book: Book2): void {
        this.books.push(book);
    }

    public listBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }

    public searchByTitle(title: string): void {
        const foundBooks = this.books.filter(book => book.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Sách tìm thấy với tiêu đề "${title}":`);
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
            });
        } else {
            console.log(`Không tìm thấy sách với tiêu đề "${title}".`);
        }
    }
}
const book6 = new Book2("To Kill a Mockingbird", "Harper Lee", "1");
const book7 = new Book2("1984", "George Orwell", "2");
const book8 = new Book2("The Great Gatsby", "F. Scott Fitzgerald", "3");
const library2 = new Library2();
library2.addBook(book6);
library2.addBook(book7);
library2.addBook(book8);
library2.listBooks();
library2.searchByTitle("1984");
library2.searchByTitle("The Great Gatsby");
library2.searchByTitle("Unknown Book");
