// //1. select target HTML object
// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// // 2 register handler function on a target HtML object
// const doSomething = (e) => {
//   // console.log('submit button is clicked')
//   // console.log(e)
//   console.log(e.target.id)
//   // console.log(e.type)
//   // console.log(e.target)
//   console.log(e.currentTarget)
//   console.log(e.eventPhase)
// }
// submitButton.addEventListener('click', doSomething)
// // -----------------------
// // inner-div
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// innerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })
// // outer-div
// const outerDiv = document.getElementById('outer-div')
// // console.log(innerDiv)
// outerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })



// let submitButton = document.querySelector('button')

// const doSomething = (e) => {
//     console.log(`Good bye, ${e.target.id}`);
// }

// submitButton.addEventListener('click',(e) => {
//     console.log(`Hello, ${e.target.id}`)
// })

// submitButton.addEventListener('click' , doSomething)

// submitButton.removeEventListener('click' , doSomething)



// let submtiButton = document.querySelector('button')

// submtiButton.addEventListener('click' , (e) => {
//     e.preventDefault()
//     const allInputElements = document.querySelectorAll('input')
//     console.log(allInputElements);
//     const isComplete = Array.from(allInputElements).every((input) => input.value.length > 0)

//     const pElement = document.getElementsByTagName('p')[0]
//     if (isComplete) {
//         pElement.textContent = 'Your input are complete'
//     } else {
//         pElement.innerHTML = '<span style="color:pink"> Missing some value, plese enter</span>'
//     }
// })



// document.addEventListener('DOMContentLoaded' , () => {
//     console.log('Your Dom tree built');
// })

// window.addEventListener('load' ,() => {
//     console.log('Your Applciation Loaded');
// })
// window.addEventListener('beforeunload',() => {
//     localStorage.setItem('myCat','Tom')
// })
// window.addEventListener('mousemove',(e)=>{
//     console.log(`x:${e.screenX}, y:${e.screenY}`);
// })



const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')

// userElement.addEventListener('focus',() => {
//     console.log('Your focus is on username');
// })
// userElement.addEventListener('blur',() => {
//     console.log('Your username input textbox is blured');
// })

userElement.addEventListener('keydown' , (e) => {
    console.log(`${e.key} , ${e.code}`)
    if (e.key >= 0 && e.key <= 9) {
        e.preventDefault()
    }
})

//When user replease enter key, text value on username will show at <p> element
userElement.addEventListener('keyup' , (e) => {
    if (e.key === 'Enter') {
        const pElement = document.querySelector('p')
        pElement.textContent = e.target.value
    }
})

userElement.addEventListener('input' , (e) => {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
})