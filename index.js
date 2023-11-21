const libraryArray = [];

function Book(title, author, pages, hasBeenRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages.`
        //return this.title + " by " + this.author + ", " + this.pages + " pages.";
    }
}

function addBookToLibrary(newBook){
    if(newBook instanceof Book){
        libraryArray.push(newBook);
    }
}

function createBookEntry(book){
    let bookEntry = document.createElement("div");
    bookEntry.classList.add("book-entry");
    bookEntry.classList.add("black-border");

    let bookTitle = document.createElement("h2");
    let lineBreak = document.createElement("br");
    let bookReadState = document.createElement("span");

    let entryButtonsDiv = document.createElement("div");
    let removeEntryButton = document.createElement("button");
    let changeReadStateButton = document.createElement("button");
    removeEntryButton.classList.add("remove-entry");
    removeEntryButton.classList.add("black-border");
    changeReadStateButton.classList.add("change-read-state");
    changeReadStateButton.classList.add("black-border");

    bookTitle.textContent = book.info();
    if(book.hasBeenRead){
        bookReadState.textContent = "Already Read";
        bookReadState.classList.add("already-read");
    } else {
        bookReadState.textContent = "Not read yet";
        bookReadState.classList.add("not-read");
    }
    bookTitle.appendChild(lineBreak);
    bookTitle.appendChild(bookReadState);
    
    entryButtonsDiv.appendChild(removeEntryButton);
    entryButtonsDiv.appendChild(changeReadStateButton);

    bookEntry.appendChild(bookTitle);
    bookEntry.appendChild(entryButtonsDiv);

    return bookEntry;
}

function displayBooks(){
    if(libraryArray.length == 0){
        return ;
    }
    for(let book in libraryArray){

    }
}