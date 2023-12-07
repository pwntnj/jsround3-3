// const pEle = document.createElement('p');
// const idAttr = document.createAttribute('id');
// idAttr.value = 'pw'; // Use the value property to set the attribute value
// pEle.setAttributeNode(idAttr); // Use setAttributeNode to set the attribute
// pEle.setAttribute('class','bg-100')
// console.log(pEle);
// const p = document.createTextNode('<h2> Hello </h2>')
// const p2 = document.createTextNode('<h3> Hello </h3>')
// pEle.appendChild(p)
// pEle.insertBefore(p,p2) 
// console.log(p);
// console.log(pEle);

// const pEle2 = document.createElement('p')

// const idAttr2 = document.createAttribute('id')
// idAttr2.value = 1001
// pEle2.setAttributeNode(idAttr2)

// const pText = document.createTextNode('<h2> Hello ,<span style="color:red"> JS </span> DOM</h2>')
// pEle2.appendChild(pText)

// const divEle = document.querySelector('div')
// divEle.appendChild(pEle2)

// const rootDoc = divEle.ownerDocument
// console.log(rootDoc);
// console.log(rootDoc.nodeName);
// console.log(rootDoc.nodeType);
// console.log(rootDoc.nodeValue);

// const Ele = document.getElementById('exampleEle')
// const textContent = Ele.textContent
// console.log(textContent); //This is some hidden text content

// const innerText = Ele.innerText
// console.log(innerText); // This is some text content

// const innerHTML = Ele.innerHTML
// console.log(innerHTML); //This is some <span style="display: none">hidden</span> text content

// const head1 = document.querySelector("head")
// console.log(head1)

const inputClick = document.getElementById('mybtn');
let pNumber = 0; // Initialize a variable to store the number

inputClick.addEventListener('click', () => {
  // Increment the variable and update the text content
  pNumber++;
  document.querySelector('p').textContent = pNumber;
    //console.log('pw');
},true);

inputClick.addEventListener('click', () =>{
    console.log('win');
}
)
console.log(pNumber); // This will log the initial value, not the updated value

const inputmes = document.getElementById('message')
const submitButton = document.getElementById('submit')
const display = document.querySelector('p')
// inputmes.addEventListener('keyup' , (event) => {
//     if (event.code === 'Enter') {
//         console.log(event.target.value);
//         display.textContent = inputmes.value
//     } else {
//         console.log('praewanarak');
//     }
// }  )
submitButton.addEventListener('click' , () => {
    display.textContent = inputmes.value
}  )

// inputmes.addEventListener('keyup', () => {
//     display.textContent = inputmes.value
// })

