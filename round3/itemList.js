const { template } = require('@babel/core')
const products = require('./data/products.js')
// import { products } from './data/products.js'
//your student id, firstname, and lastname here
function itemList(userItems) {
  const items = userItems;

  const initialPage = () => {
    const categoriesDiv = document.getElementById('categories');
    const categoryButtons = categoriesDiv.getElementsByTagName('button');

    // Adding filterItemsByCategoryHandler to all category buttons
    Array.from(categoryButtons).forEach((button) => {
      button.addEventListener('click', filterItemsByCategoryHandler);
    });

    // Showing all items by default
    showItems(items);
  };

  const filterItemsByCategoryHandler = (event) => {
    // Remove style of previous category button
    const previousSelectedButton = document.querySelector('button');
    if (previousSelectedButton) {
      previousSelectedButton.style.backgroundColor = 'lightgray';
      previousSelectedButton.classList.remove('button');
    }

    // Assign an original button stylesheet to the clicked button
    const selectedButton = event.target;
    selectedButton.style.backgroundColor = 'yellow';
    selectedButton.classList.add('button');

    // Filter items by the selected category
    const category = selectedButton.textContent.trim();//รวมเข้ากัน
    const filteredItems = items.filter((item) => item.category === category);

    // Call showItems function with the filtered array
    showItems(filteredItems);
  };

  const showItems = (items) => {
    // Remove previous items list
    const itemsList = document.getElementById('items');
    itemsList.innerHTML = '';

    // Create new list items for each product
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `ID:${item.ID}, NAME:${item.NAME}, CATEGORY:${item.CATEGORY}`;
      itemsList.appendChild(listItem);
    });
  };

  return {
    initialPage,
    filterItemsByCategoryHandler,
    showItems,
  };
}

module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsByCategoryHandler, showItems } =
//   itemList(products)
// initialPage()