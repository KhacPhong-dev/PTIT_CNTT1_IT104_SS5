class Book1{
    private title: string
    private author: string
    private id: string
    constructor(title: string, author : string, id: string){
        this.title = title
        this.author = author
        this.id = id        
    }
    getId(): string {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
}

class Library1{
    private books: Book1[] = [];
    public addBook(book:Book1): void{
        this.books.push(book);
    }
    public listBook():void{
        console.log("Danh sach sach trong thu vien:")
        for(let i = 0; i< this.books.length; i++){
            console.log(`${i+1}. ${this.books[i].getTitle()} - ${this.books[i].getAuthor()}`)

        }
    }
    updateBook (id: string, newTitle: string, newAuthor: string): void {
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
