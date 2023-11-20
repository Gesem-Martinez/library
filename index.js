const libraryArray = [];

function Book(title, author, pages, hasBeenRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;

    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.hasBeenRead == false ? "not read yet" : "already read");
    }
}

function addBookToLibrary(newBook){
    if(newBook instanceof Book){
        libraryArray.push(newBook);
    }
}

function displayBooks(){
    for(let book in libraryArray){
        
    }
}