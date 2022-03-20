


let myLibrary = [];
const displayBody = document.querySelector('.displayBody')

function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus

  
}

function addBookToLibrary(book) {
  if(!myLibrary.includes(book)){
    myLibrary.push(book)
  }
}

const g = new Book('Harry Potter','JK Rowling','200', 'Have read')
const x = new Book('Lord of the Rings','George R.R Martin','300', 'Have read')
const q = new Book('I cant think of another book','me','400', 'Have read')
addBookToLibrary(g)
addBookToLibrary(x)
addBookToLibrary(q)
console.log(myLibrary);

function displayBook(){
 for(let i =0; i<myLibrary.length; i++){
  let bookDiv = document.createElement('div')
  bookDiv.classList.add('card');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('cardContent')
    titleDiv.textContent = `Title: ${myLibrary[i].title}`
    bookDiv.append(titleDiv)

    let authorDiv = document.createElement('div')
    authorDiv.classList.add('cardContent')
    authorDiv.textContent = `Author: ${myLibrary[i].author}`
    bookDiv.append(authorDiv)


    let pagesDiv = document.createElement('div')
    pagesDiv.classList.add('cardContent')
    pagesDiv.textContent = `Number of Pages: ${myLibrary[i].pages}`
    bookDiv.append(pagesDiv)

  
  
  
  
  displayBody.append(bookDiv)

 }
}
displayBook()


let addBookButton= document.querySelector("#addBook");
let modalCloseButton= document.querySelector("#closeBtn");
let modal = document.querySelector(".modalCont"); 


addBookButton.addEventListener('click', ()=>{
  modal.style.display = 'block'
})


modalCloseButton.addEventListener('click', ()=>{
  modal.style.display = "none"
})

let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', ()=>{
  event.preventDefault()
  modal.style.display = "none"
})