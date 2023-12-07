import {
  showNumberOfDone,
  showNumberOfNotDone,
  showTodoItem,
  removeTodoItem,
} from '../UI/todoListUI.js'
import TodoList from '../lib/todoManagement.js'

let listtodo = document.getElementById('listTodo')
let addButton = document.getElementById('addBtn')
let myTodo = TodoList()
let notDoneCheck = 0
let doneCheck = 0
function addTodoHandler() {
  let inputText = document.querySelector('h2 + input').value
  if (inputText.length > 0) {
    let myId = myTodo.addTodo(inputText)
    showTodoItem(myId, myTodo.findTodo(myId).description)
    showNumberOfNotDone(++notDoneCheck)
  }
}
function notDoneButtonHandler(e) {
  if (e.target.tagName == 'BUTTON') {
    let todoItem = e.target.parentNode
    if (e.target.textContent === 'Not done') {
      myTodo.setItemToDone(todoItem.id)
      console.log(todoItem)
      e.target.textContent = 'done'
      e.target.style.color = 'white'
      e.target.style.backgroundColor = 'green'
      showNumberOfNotDone(--notDoneCheck)
      showNumberOfDone(++doneCheck)
    }
  }
}
function removeButtonHandler(e) {
  let todoItem = e.target.parentNode
  let checkButton = todoItem.querySelector('button')
  if (e.target.textContent === 'Remove') {
    console.log(e.target.textContent)
    myTodo.removeTodo(todoItem.id)
    removeTodoItem(todoItem.id)
    if (checkButton.textContent === 'Not done') {
      showNumberOfNotDone(--notDoneCheck)
    } else {
      showNumberOfDone(--doneCheck)
    }
  }
}

addButton.addEventListener('click', addTodoHandler)
listtodo.addEventListener('click', notDoneButtonHandler)
listtodo.addEventListener('click', removeButtonHandler)

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  // loadHandler,
  // beforeUnloadHandler,
}
