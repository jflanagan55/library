let myLibrary = [];
const displayBody = document.querySelector('.displayBody')

class Book{ 
  constructor(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
  }
  addBookToLibrary(book) {
    if(!myLibrary.includes(book)){
      myLibrary.push(book)
    }
  }

}
  





 


let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', ()=>{
  event.preventDefault()
  let titleInfo = document.querySelector("#title").value
  let authorInfo = document.querySelector("#author").value
  let pagesInfo = document.querySelector("#pages").value
  let book = new Book(titleInfo, authorInfo, pagesInfo)
})






