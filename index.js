
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


  class displayFunctions{

  static  addBookToDisplay(book){
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

      let haveReadCell = document.createElement('td')
      let haveReadButton= document.createElement('button');
      haveReadButton.classList.add('readStatusButton')
      if(haveRead === true){
      haveReadButton.innerText = "Yes";
      }
      else{
        haveReadButton.innerText = "No"
      }
      newRow.append(haveReadCell)
      haveReadCell.append(haveReadButton)

      let deleteCell = document.createElement('td')
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add('delete');
      deleteBtn.innerText = "Delete"
      newRow.append(deleteBtn)

      let libData = document.querySelector('.libData');
      libData.append(newRow)

      deleteBtn.addEventListener('click', () =>{
        let rowRemove = deleteBtn.parentElement;
        let dad = rowRemove.parentElement;
        dad.removeChild(rowRemove);
        capture: true
        
            
      })
      haveReadButton.addEventListener('click', ()=>{
        if(haveReadButton.innerText === "Yes"){
          haveReadButton.innerText = "No"
        }
        else {haveReadButton.innerText = "Yes"}
      })
      


    }
  }

  
let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', ()=>{
  event.preventDefault()
  let titleInfo = document.querySelector("#title").value
  let authorInfo = document.querySelector("#author").value
  let pagesInfo = document.querySelector("#pages").value
  let haveReadInfo = document.querySelector('#haveRead').checked
  let book = new Book(titleInfo, authorInfo, pagesInfo, haveReadInfo)
  book.addBookToLibrary(book)
  displayFunctions.addBookToDisplay(book)
  clearForm()
})


function clearForm(){
  document.querySelector('#title').value = ""
  document.querySelector('#author').value= ""
  document.querySelector('#pages').value= ""
  document.querySelector('#haveRead').checked = false

}



