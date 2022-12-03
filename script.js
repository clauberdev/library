
function openForm() {
    document.getElementById('popupForm').style.display = "block";
}

const btnCloseForm = document.querySelector("#closeform");
btnCloseForm.addEventListener("click", closeForm, false);

function closeForm(event) {
    document.getElementById('popupForm').style.display = "none";
    event.preventDefault()

}

// document.getElementById("popupForm").addEventListener("click", function(event){
//     event.preventDefault()
//   });

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
}

const newBook1 = new Book();
const newBook2 = new Book("The C Programming", "Brian Kernighan, Dennis Ritchie", 288, true);
const newBook3 = new Book("The C Programming", "Brian Kernighan, Dennis Ritchie", 288, true);
const newBook4 = new Book("The C Programming", "Brian Kernighan, Dennis Ritchie", 288, true);

//console.log(newBook1.title)

const btnSubmit = document.querySelector("#id-submit");
btnSubmit.addEventListener("click", addBookToLibrary, false);

function addBookToLibrary(event) {
 
    newBook1.title = document.getElementById("title").value;
    newBook1.author = document.getElementById("author").value;
    newBook1.pages = document.getElementById("pages").value;
    newBook1.read = document.getElementById("read").value;
    myLibrary.push(newBook1)
    console.log(myLibrary)
    showBooks()
    event.preventDefault();
}

// addBookToLibrary()

console.log(myLibrary[myLibrary.length])
function showBooks() {
// myLibrary.forEach((element) => {
    const ul = document.getElementById("listbooks");
    const li = document.createElement("li");
    const button = document.createElement("button");
    //button.setAttribute("onclick", "remove()");
    const textli = document.createTextNode(getBook(myLibrary[myLibrary.length - 1]));

    const textbutton = document.createTextNode("Excluir");

    li.appendChild(textli);
    button.appendChild(textbutton);
    ul.appendChild(li);

    button.addEventListener("click", function() {
        li.remove()
    })
    li.appendChild(button);
    //console.log(getBook(element))
// })

}

function getBook(book) {
    return [book.title, book.author, book.pages, book.read].join(" ")
}



