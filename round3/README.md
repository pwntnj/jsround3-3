# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# test-filter-category project

The product data is in ./data/product.js

# itemList Requirement

given a function called _itemList(userItems)_ that contains one constant variable and three nested functions to filter for products. Write three nested functions to work When a user click any category buttons , your item list must change dynamically according to a user’s selected category.

### Constant Variables:

- **items**: assign userItems parameter to initial items

### Nested Functions:

- **initalPage()** adding _filterItemsByCategoryHandler()_ function to all `<button>` under `<div id="categories">` with event 'click'. Then calling _showItems()_ function to show list of all items as default when firstly loading page.

- **filterItemsByCategoryHandler()** filtering an array of items with a user’s selected category. You must remove style of previous 's category button and assign an original button stylesheet `'background-color:lightgray'`. Then adding stylesheet `'background-color:yellow'` to a user’s selected category button and calling _showItems()_ function by sending filtered array as parameter.

- **showItems(_items_)** accepting array of items and show them dynamically. You must remove previous ’s item list. Then creating `<li>` elements for each single item under `<ul id="items"></ul>`. Each `<li>` element contains a text content `'ID:product id, NAME:product name, CATEGORY:product category'`.

  - for example, `'ID:GGOEAFKA087499, NAME:Android Small Removable Sticker Sheet’, CATEGORY:accessories'`.

  - Note that there is one white space after comma (,) among ID and NAME and NAME and CATEGORY.

# Test Structures

- test('output#1: _initialPage (show all items)_')
- test('output#2: _showItem (default page)_')
- test('output#3: _filterItemsByCategoryHandler_')
- test('output#4: _showItems (only are in filtered category)_')

# Screen Capture Outputs

![All Items](/assets/images/output1.JPG)
![Only Items with accessories category](/assets/images/output2.JPG)
![Only Items with apparel category](/assets/images/output3.JPG)
![Only Items with bags category](/assets/images/output4.JPG)
![Only Items with drinkware category](/assets/images/output5.JPG)
![Only Items with office category](/assets/images/output6.JPG)
![Only Items with shop by brand category](/assets/images/output7.JPG)
