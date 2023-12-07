// const { template } = require("@babel/core");
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require("./lib/paginate.js");
// const products = require("./data/products.js");
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const allItems = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemsOfCurrentPage = getItemsOfCurrentPage(allItems, currentPageNumber, rowsPerPage)
    const productsContainer = document.getElementById('products')
    itemsOfCurrentPage.forEach((product) => {
      const listItem = document.createElement('li')
      listItem.textContent = `ID:${product.id}, NAME:${product.name}`
      productsContainer.appendChild(listItem)
    })
  }

  const pageHandler = (event) => {
  const clickedPageNumber = event ? event.target.id : '1'; // Default to page 1 if event is undefined

  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  const allPageButtons = document.querySelectorAll('.pagination button');
  allPageButtons.forEach((button) => {
    button.style.border = '1px solid #999';
    button.style.backgroundColor = ''; // Remove background color
  });

  showItemsOfCurrentPage(clickedPageNumber);

  const currentPageButton = document.getElementById(clickedPageNumber);
  if (currentPageButton) {
    currentPageButton.style.border = '1px solid #000'; // You can customize the border color
    currentPageButton.style.backgroundColor = 'LightSteelBlue';
  }
};


  const showPageNumbers = () => {
    const totalPages = getTotalPages(allItems, rowsPerPage)
    const paginationContainer = document.querySelector('.pagination')

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button')
      pageButton.id = `${i}`
      pageButton.textContent = `${i}`
      pageButton.addEventListener('click', pageHandler)    

      paginationContainer.appendChild(pageButton)
    }
  }


  return {
    showPageNumbers,
    pageHandler
  }
}

// module.exports = paginateManagement;
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10);
showPageNumbers();
pageHandler();