import { products } from './data/products.js';

function itemList(userItems) {
  const items = userItems;

  const initialPage = () => {
    const inputElement = document.querySelector('text');
    inputElement.addEventListener('input', filterItemsHandler);

    showItems(items);
  };

  const filterItemsHandler = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.keywords.toLowerCase().includes(keyword)
    );

    showItems(filteredItems);
  };

  const showItems = (items) => {
    // Remove previous item list
    const itemsContainer = document.getElementById('items');
    if (itemsContainer) {
      itemsContainer.innerHTML = '';
    } else {
      // Create <ul> element if not exists
      const newItemsContainer = document.createElement('ul');
      newItemsContainer.id = 'items';
      document.body.appendChild(newItemsContainer);
    }

    // Create <li> elements for each item and append them to the 'items' container
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`;
      itemsContainer.appendChild(listItem);
    });
  };

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  };
}

// Export itemList module
export { itemList };

// Call initialPage when the page loads
const { initialPage } = itemList(products);
initialPage();
