import Todo from './todo.js'
export default function TodoList() {
  let todos = []
  function addTodo(desc, done) {
    let myTodo = new Todo(desc, done)
    todos.push(myTodo)
    return myTodo.id
  }
  function findTodo(searchId) {
    return todos.find((find) => find.id === searchId)
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => searchId === todo.id)
  }
  function removeTodo(searchId) {
    let getId = todos.findIndex((todo) => todo.id === searchId)
    return todos.splice(getId, 1)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    let getDone = todos.filter((todo) => todo.done === 'Done')
    return getDone.length
  }
  function getNumberOfNotDone() {
    let getNotDone = todos.filter((todo) => todo.done === 'Not Done')
    return getNotDone.length
  }
  function clearTodo() {
    return (todos = [])
  }
  function setItemToDone(doneId) {
    let todoItem = findTodo(doneId)
    if (todoItem) {
      return (todoItem.done = true)
    }
  }
  // function loadTodos(userTodos) {
  //   Todo.setRunningId(userTodos[userTodos.length + 1].id + 1)

  //   userTodos.forEach((todo) => {
  //     addTodo(todo.id, todo.description, todo.done)
  //   })
  // }

  return {
    addTodo,
    findTodo,
    getTodos,
    findIndexTodo,
    removeTodo,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setItemToDone,
    // loadTodos,
  }
}
