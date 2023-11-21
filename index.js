let libraryArray = [];

function Book(title, author, pages, hasBeenRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;

    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages.";
    };
}

function doesBookExists(title, author){
    for(let book of libraryArray){
        if(book.title == title && book.author == author){
            return true;
        }
    }

    return false;
}

function addBookToLibrary(newBook){
    for(let key in newBook){
        if(newBook[key] == ""){
            return;
        }
    }

    libraryArray.push(newBook);
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
    if(book.hasBeenRead == "true"){
        bookReadState.textContent = "Already Read";
        bookReadState.classList.add("already-read");
    } else {
        bookReadState.textContent = "Not read yet";
        bookReadState.classList.add("not-read");
    }
    bookReadState.classList.add("book-read-state");
    bookTitle.appendChild(lineBreak);
    bookTitle.appendChild(bookReadState);
    
    entryButtonsDiv.appendChild(removeEntryButton);
    entryButtonsDiv.appendChild(changeReadStateButton);

    bookEntry.appendChild(bookTitle);
    bookEntry.appendChild(entryButtonsDiv);
    bookEntry.setAttribute("data-index", libraryArray.indexOf(book));
    
    entryButtonsListeners(removeEntryButton, "remove", bookEntry);
    entryButtonsListeners(changeReadStateButton, "change", [book, bookReadState]);
    return bookEntry;
}

function displayBooks(){
    const bookDisplay = document.querySelector(".book-display");
    bookDisplay.innerHTML = '';
    if(libraryArray.length == 0){
        return ;
    }

    for(let book of libraryArray){
        let entry = createBookEntry(book);
        bookDisplay.appendChild(entry);
    }
}

function removeEntry(entry){
    let entryIndex = Number(entry.getAttribute("data-index"));
    libraryArray = libraryArray.slice(0, entryIndex).concat(libraryArray.slice(entryIndex + 1));
}

function toggleReadState(book, stateLabel){
    let newState = "false";
    if(book.hasBeenRead == "true"){
        stateLabel.textContent = "Not read yet";

        stateLabel.classList.remove("already-read");
        stateLabel.classList.add("not-read");
    } else {
        stateLabel.textContent = "Already Read";

        stateLabel.classList.remove("not-read");
        stateLabel.classList.add("already-read");

        newState = "true";
    }

    book.hasBeenRead = newState;
}

function entryButtonsListeners(btn, func, target){

    if(func == "remove"){
        btn.addEventListener('click', (event) => {
            removeEntry(target);
            displayBooks();
        });
    }

    if(func == "change"){
        btn.addEventListener('click', (event) => {
            toggleReadState(target[0], target[1]);
        });
    }
}

const bookTitleEntry = document.querySelector("#title");
const bookAuthorEntry = document.querySelector("#author");
const bookPagesEntry = document.querySelector("#pages");
const bookReadStateEntry = document.querySelector("#readState");

const newBookButton = document.querySelector(".submit-button");
newBookButton.addEventListener('click', (event) =>{
    if(!doesBookExists(bookTitleEntry.value, bookAuthorEntry.value)){
        let newEntry = new Book(bookTitleEntry.value, bookAuthorEntry.value, bookPagesEntry.value, bookReadStateEntry.value);
        addBookToLibrary(newEntry);
        displayBooks();
    }
    event.preventDefault();
}, false);