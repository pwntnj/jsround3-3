export default class Todo {
  static runningId = 1
  // static setRunningId(loadingId) {
  //   Todo.runningId = loadingId
  // }
  constructor(description, done = false) {
    this.id = Todo.runningId++
    this.description = description
    this.done = done
  }
  getTodo() {
    return this
  }
  setDescription(Newdesc) {
    this.description = Newdesc
  }
  setDone() {
    this.done = 'Done'
  }
}
// module.exports = { Todo }
