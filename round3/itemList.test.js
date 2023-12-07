const products = require('./data/products.js')
const itemList = require('./itemList.js')

const fs = require('fs')
const initialHtml = fs.readFileSync('./index.html')
window.document.body.innerHTML = initialHtml

beforeEach(() => {
  window.document.body.innerHTML = initialHtml
  jest.resetModules()
})
// const randomKeywords = ['waze', 'happy', 'WINDOW', 'Droid', '17']
// // const getRandomIndex = () => Math.floor(Math.random() * 6)
// // const testSearchValue = randomKeywords[getRandomIndex()]

const { initialPage, filterItemsByCategoryHandler, showItems } =
  itemList(products)

test('initialPage (show all items)', () => {
  initialPage()
  const itemsUl = document.getElementById('items')
  expect(itemsUl.children).toHaveLength(products.length)
  for (let i = 0; i < itemsUl.children.length; i++) {
    const item = itemsUl.children[i]
    expect(item.nodeName).toBe('LI')
    expect(item.textContent).toBe(
      `ID:${products[i].id}, NAME:${products[i].name}, CATEGORY:${products[i].category}`
    )
  }
})

test('showItem (default page)', () => {
  showItems(products)
  const itemsUl = document.getElementById('items')
  expect(itemsUl.children).toHaveLength(products.length)
  for (let i = 0; i < itemsUl.children.length; i++) {
    const item = itemsUl.children[i]
    expect(item.nodeName).toBe('LI')
    expect(item.textContent).toBe(
      `ID:${products[i].id}, NAME:${products[i].name}, CATEGORY:${products[i].category}`
    )
  }
})

test('filterItemsByCategoryHandler', () => {
  const itemsUl = document.getElementById('items')
  const divCategory = document.getElementById('categories')
  Array.from(divCategory.children).forEach((categoryButton) => {
    categoryButton.addEventListener('click', filterItemsByCategoryHandler)
    const event = new Event('click')
    categoryButton.dispatchEvent(event)

    expect(categoryButton.style['background-color']).toEqual('yellow')
    Array.from(divCategory.children)
      .filter(
        (noClickButton) =>
          noClickButton.getAttribute('id') !== categoryButton.getAttribute('id')
      )
      .forEach((noActionButton) =>
        expect(noActionButton.style['background-color']).toEqual('lightgray')
      )

    const filteredItems = products.filter((product) => {
      return product.category.toLowerCase() === categoryButton.id.toLowerCase()
    })

    expect(itemsUl.children.length).toBe(filteredItems.length)

    for (let i = 0; i < itemsUl.children.length; i++) {
      const item = itemsUl.children[i]
      expect(item.nodeName).toBe('LI')
      expect(item.textContent).toBe(
        `ID:${filteredItems[i].id}, NAME:${filteredItems[i].name}, CATEGORY:${filteredItems[i].category}`
      )
    }
  })
})

test('showItems (only are in filtered category)', () => {
  const itemsUl = document.getElementById('items')
  const divCategory = document.getElementById('categories')
  Array.from(divCategory.children).forEach((categoryButton) => {
    const filteredItems = products.filter((product) => {
      return product.category.toLowerCase() === categoryButton.id.toLowerCase()
    })
    showItems(filteredItems)
    expect(itemsUl.children.length).toBe(filteredItems.length)

    for (let i = 0; i < itemsUl.children.length; i++) {
      const item = itemsUl.children[i]
      expect(item.nodeName).toBe('LI')
      expect(item.textContent).toBe(
        `ID:${filteredItems[i].id}, NAME:${filteredItems[i].name}, CATEGORY:${filteredItems[i].category}`
      )
    }
  })
})
