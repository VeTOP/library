// Where book objects will be stored
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// function that takes user input and stores the new book object in array
function addBookToLibrary() {
    // take input
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = window. document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    //create object
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    displayBooksOnPage(book);
  }

function displayBooksOnPage(item){


        //create card
        const node = document.createElement("div");
        node.classList.add("card");

        //create element for card
        const titleMessage = document.createElement("p");
        const authorMessage = document.createElement("p");
        const pagesMessage = document.createElement("p");

        //add them some classes
        titleMessage.classList.add("message");
        authorMessage.classList.add("message");
        pagesMessage.classList.add("message");


        const titleTextnode = document.createTextNode(item.title);
        const authorTextnode = document.createTextNode(item.author);
        const pagesTextnode = document.createTextNode(item.pages);

        titleMessage.appendChild(titleTextnode);
        authorMessage.appendChild(authorTextnode);
        pagesMessage.appendChild(pagesTextnode);

        
        node.appendChild(titleMessage);
        node.appendChild(authorMessage);
        node.appendChild(pagesMessage);

        const button = document.createElement('button');
        button.classList.add('delete');
        button.onclick = function() {node.remove();};
        const buttonTextnode = document.createTextNode("X");
        button.appendChild(buttonTextnode);
        node.appendChild(button);

        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add('checkbox1');
        node.appendChild(checkbox);

        if (item.read){
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }


        document.getElementById("shelf").appendChild(node);

}

