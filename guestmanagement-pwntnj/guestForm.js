import { createGuestList } from './data/guestdata.js'
import { GuestManagement } from './lib/GuestManagement.js'
// const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
const guestManagement = new GuestManagement();
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const rearchInput = document.getElementById('search-input')
    rearchInput.addEventListener('keyup',searchGuest)
    const addButton = document.getElementById('add-guest-btn')
    addButton.addEventListener('click',addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    let {firstname,lastname} =guestItem
    let fl = `${firstname} ${lastname}`
    let divDispaly = document.createElement('div')
    let spanFnln = document.createElement('span')
    spanFnln.textContent = fl
    let spanX = document.createElement('span') 
    spanX.setAttribute('class','remove-icon')
    spanX.setAttribute('id',`${firstname}-${lastname}`)
    spanX.style.cursor = 'pointer';
    spanX.style.color = 'red';
    spanX.textContent = '[X]'
    spanX.addEventListener('click', removeGuest)
    divDispaly.appendChild(spanFnln)
    divDispaly.appendChild(spanX)
    
    const displayArea = document.getElementById('display-area');
  displayArea.appendChild(divDispaly);
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const divDis = document.getElementById('display-area')
    // divDis.innerHTML = ''
    guestResult.forEach(guestItem => {
      displayGuest(guestItem);
    });
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const searchInput = document.getElementById('search-input');
    const searchGuest = event.target.value
    let s =guestManagement.searchGuests(searchGuest)
    displayGuests(s)
  }
  
  

  // 5. Function to add a new guest
  function addGuest() {
    // let inputFn = document.getElementById('firstname-input').value
    // let inputLn = document.getElementById('lastname-input').value
    // const newGuestObject = {inputFn,inputLn}
    // console.log(newGuestObject);
    // guestManagement.addNewGuest(inputFn,inputLn)
    // displayGuest(newGuestObject)
    // document.getElementById('firstname-input').value = ''
    // document.getElementById('lastname-input').value = ''
    const inputFn = document.getElementById('firstname-input').value;
    const inputLn = document.getElementById('lastname-input').value;

    // Call addNewGuest in GuestManagement
    guestManagement.addNewGuest(inputFn, inputLn);

    // Create newGuestObject for display
    const newGuestObject = { firstname: inputFn, lastname: inputLn };
    console.log(newGuestObject);

    // Call displayGuest to display the new guest
    displayGuest(newGuestObject);

    // Clear input textboxes
    document.getElementById('firstname-input').value = '';
    document.getElementById('lastname-input').value = '';
    }

  // 6. Function to remove a guest
  function removeGuest(event) {
  const removeBtn = document.querySelectorAll('.remove-icon')
  const deleteGuest = event.target.id
  // console.log(deleteGuest);
  const namesArray = deleteGuest.split('-');

  // Extract the first and last names
  const firstname = namesArray[0];
  const lastname = namesArray[1];
  
  // Create a newGuestObject
  const newGuestObject = { firstname, lastname };
  // removeBtn.addEventListener('click' , guestManagement.removeGuest(newGuestObject))
  guestManagement.removeGuest(newGuestObject)
  console.log(newGuestObject);
}

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())