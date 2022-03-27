
const displayBody = document.querySelector('.displayBody')

let table = document.querySelector('table')
const myLibrary = [];

class Book{ 
  constructor(title, author, pages, haveRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
  }


  addBookToLibrary(book) {
    if(!myLibrary.includes(book)){
      myLibrary.push(book)
    }
  }

  }




    function addBookToDisplay(book){
      let newRow = document.createElement('tr');
      newRow.classList.add('tableRows')
      let {title, author, pages, haveRead} = book;

      let titleCell= document.createElement('td');
      titleCell.innerText = title;
      newRow.append(titleCell)

      let authorCell= document.createElement('td');
      authorCell.innerText = author;
      newRow.append(authorCell)

      let pagesCell= document.createElement('td');
      pagesCell.innerText = pages;
      newRow.append(pagesCell)

      let haveReadCell= document.createElement('td');
      haveReadCell.innerText = haveRead;
      newRow.append(haveReadCell)

      let libData = document.querySelector('.libData');
      libData.append(newRow)


    }
  

  
let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', ()=>{
  event.preventDefault()
  let titleInfo = document.querySelector("#title").value
  let authorInfo = document.querySelector("#author").value
  let pagesInfo = document.querySelector("#pages").value
  let haveReadInfo = document.querySelector('#haveRead').value
  let book = new Book(titleInfo, authorInfo, pagesInfo, haveReadInfo)
  book.addBookToLibrary(book)
  addBookToDisplay(book)
})







