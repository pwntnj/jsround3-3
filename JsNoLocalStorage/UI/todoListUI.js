let listTodo = document.getElementById('listTodo')
let checkDone = document.getElementById('done')
let checkNotDone = document.getElementById('notDone')

function showTodoItem(newId, newDescription) {
  let addTodo = document.createElement('div')
  addTodo.setAttribute('class', 'todoItem')
  addTodo.setAttribute('id', `${newId}`)
  let paragraphText = document.createElement('p')
  let notDoneButton = document.createElement('button')
  let removeButton = document.createElement('button')
  paragraphText.textContent = newDescription
  notDoneButton.textContent = 'Not done'
  removeButton.textContent = 'Remove'
  addTodo.appendChild(paragraphText)
  addTodo.appendChild(notDoneButton)
  addTodo.appendChild(removeButton)
  listTodo.appendChild(addTodo)
}
function showNumberOfDone(numberOfDone) {
  checkDone.textContent = `Number of Done:${numberOfDone}`
}
function showNumberOfNotDone(numberOfNotDone) {
  checkNotDone.textContent = `Number of Not Done:${numberOfNotDone}`
}
function removeTodoItem(removeId) {
  let getRemoveId = document.getElementById(`${removeId}`)
  getRemoveId.remove()
}
export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
