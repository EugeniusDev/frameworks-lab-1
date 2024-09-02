interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;

    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    pageCount: number;

    constructor(title: string, author: string, pageCount: number) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`\"${this.title}\" successfully borrowed.`);
        } else {
            console.log(`\"${this.title}\" is already borrowed.`);
        }
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`\"${this.title}\" successfully borrowed.`);
        } else {
            console.log(`\"${this.title}\" is already borrowed.`);
        }
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    durationInMinutes: number;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.durationInMinutes = duration;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`\"${this.title}\" successfully borrowed.`);
        } else {
            console.log(`\"${this.title}\" is already borrowed.`);
        }
    }
}

class Library {
    private items: LibraryItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`\"${item.title}\" added to the library.`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    listAvailableItems(): void {
        this.items.forEach(item => {
            if (!item.isBorrowed) {
                console.log(`Title: ${item.title}, Author: ${item.author}`);
            }
        });
    }
}


const book1 = new Book("Точка неповернення", "Дмитро Вербич", 328);
const book2 = new Book("Чорне сонце", "Василь Шкляр", 281);
const magazine1 = new Magazine("Буковина", "Author 1", 202);
const dvd1 = new DVD("Dune 3", "Noname", 148);

const library = new Library();
library.addItem(book1);
library.addItem(book2);
library.addItem(magazine1);
library.addItem(dvd1);

console.log("Available items in the library before borrowing:");
library.listAvailableItems();

console.log();

book1.borrow();
book1.borrow();

const foundItem = library.findItemByName("Dune 3");
if (foundItem) {
    foundItem.borrow();
} else {
    console.log("Item not found.");
}

console.log("\nAvailable items in the library after borrowing:");
library.listAvailableItems();