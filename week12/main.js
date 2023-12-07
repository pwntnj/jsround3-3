//select the first node eith its id
//หาrootทั้งหมด
const ulStudents1 = document.getElementById('students')
console.log(ulStudents1);

// //select the first node eith its CSS
// //หาเฉพาะที่กำหนด
// const ulStudents2 = document.querySelector('#students')
// console.log(ulStudents2);

// const programmingLect1 = document.querySelector('.programming , #int101 , #p-01')
// console.log(programmingLect1);

// const ulStudents3 = document.querySelector('ul[id="students"]')
// console.log(ulStudents3);

// const ulEle = document.querySelector('ul')
// console.log(ulEle);

// const divUl = document.querySelector('div>ul')
// console.log(divUl)

// const programmingLect = document.getElementsByClassName('programming')
// console.log(programmingLect);

// const ulTagname = document.getElementsByTagName('ul')
// console.log(ulTagname);
// console.log(ulTagname.length);

// const coursesEle = document.querySelectorAll('.courses')
// console.log(coursesEle);

// const divEle  =document.getElementById('bscit-courses')
// const coursesUnderDiv = divEle.querySelectorAll('.courses')
// console.log(coursesUnderDiv);

// const courseUnderDoc = document.querySelectorAll('.courses')
// console.log(courseUnderDoc)

// const programmingLect = document.querySelectorAll('.programming')
// console.log(programmingLect);
// programmingLect.forEach((p1) => {
//     console.log(p1);
//     console.log(p1.nodeName);
//     console.log(p1.nodeType);
//     console.log(p1.nodeValue);
//     console.log(p1.attributes);
//     Array.from(p1.attributes).forEach((attr) => console.log(attr))
// })

// const pEle = document.getElementById('p-01')
// const pEleAttributes = pEle.attributes
// console.log(pEleAttributes);
// console.log(pEleAttributes.length);
// Array.from(pEleAttributes).forEach((attr) => {
//     console.log(attr.name);
//     console.log(attr.value);
// })
// console.log(pEle.getAttribute('id'));

// const ulEle = document.getElementsByTagName('ul')
// Array.from(ulEle).forEach((ul) => console.log(ul))

// //CRUD
// const newLiEle = document.createElement("li") //<li></li>
// newLiEle.setAttribute('class','devops') //set attribute name="value"
// newLiEle.setAttribute('name' , 'dev') //<li class = "devops" name="dev"></li>
// newLiEle.textContent = 'Siam Yamsangsung' //text value <li class = "devops" name="dev">Siam</li>
// newLiEle.innerHTML = '<span style="color:red" > Siam Yamsangsung</span>'
// const divParent = document.querySelector('div.lecturers > ul')
// console.log(divParent);
// // divParent.appendChild(newLiEle)

// const liEle = document.querySelectorAll('div.lecturers >ul >li')
// console.log(liEle);
// const refNode = liEle[1]
// console.log(refNode);

// // divParent.insertBefore(newLiEle,refNode) //บอกNodeว่าจะมาก่อนNodeไหน
// // divParent.replaceChild(newLiEle,refNode) //replace
// divParent.removeChild(refNode) //remove

// //window
// window.alert('Do you went to exit?') //ส่งอย่างเดียว

// const userName = window.prompt('Please enter your name' , "ex. Natthanan")
// console.log(userName);

// const isExit = window.confirm(`Goodbye, ${userName}`)
// console.log(isExit);


// const pEle = document.createElement('p');
// const idAttr = document.createAttribute('id');
// idAttr.value = 'pw'; // Use the value property to set the attribute value
// pEle.setAttributeNode(idAttr); // Use setAttributeNode to set the attribute
// console.log(pEle);
