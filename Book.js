export class Book {
    constructor(title, author, description, numberOfPages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.numberOfPages = numberOfPages;
        this.currentPage = currentPage;
        this.read = true;
    }

 

    readBook(page) {
        if (page < 1 || page > this.numberOfPages.length) {
            return 0;
        } else if (page === this.numberOfPages) {
            this.read = true;
            return 1;
        }
    }
}

let Book1 = new Book ('Nicks sick book about nothing', 'Nick', 'This is a sick book written by Nick which is about nothing', 69, 420, false);
let Book2 = new Book ('Nicks not-so-sick book', 'Not Nick', 'This is a book this isnt very sick', 100, 100, true);
let Book3 = new Book ('Worst Book Ever', 'Definitely Not Nick', 'Dont even bother reading this shit, its quite possibly the worst book ever', 10, 20, false);

export const books = [Book1, Book2, Book3];
