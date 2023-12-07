import {
  showNumberOfDone,
  showNumberOfNotDone,
  showTodoItem,
} from './UI/todoListUI.js'
import TodoList from './lib/todoManagement.js'
import {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
} from './eventHandler/evenController.js'
let addBtn = document.getElementById('addBtn')
let myTodo = TodoList()
addBtn.addEventListener('click', addTodoHandler)

// import {
//   beforeUnloadHandler,
//   load,
//   loadHandler,
// } from './eventHandler/evenController.js'

// window.addEventListener('load', () => {
//   loadHandler()
// })
// window.addEventListener('beforeunload', (event) => {
//   beforeUnloadHandler(event)
// })
