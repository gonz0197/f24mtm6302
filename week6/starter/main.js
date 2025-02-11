/** Variables */
// 1. Create a Categories Array
const categories = ['All', 'T-shirts', 'Hoodie', 'Pants'];
const cart = [];

/** Functions */
//2. Display Categories Dynamically
// Create a function to display the categories | function
function displayCategories() {

    // Retrieve the HTML element where the categories will be displayed | getElementById
    const $categories = document.getElementById('categories');
    // Create an empty list (array) to store the category elements | const, array
    const htmlTemplate = [];
    // Loop through each item in the categories array | forEach
    categories.forEach( category => htmlTemplate.push(`<li class="nav-item">
    <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
  </li>`) )
        // Create an HTML list item for each category | template literal, push

    console.log(htmlTemplate);
    // Combine the list of category elements into a single string | join
    // Insert the HTML into the categories element | innerHTML
    $categories.innerHTML = htmlTemplate.join('');
}

displayCategories();
//3. Refactor with map()
function displayCategoriesMap() {
    // Create a function to display the categories | function
    // Retrieve the HTML element where the categories will be displayed | getElementById
    // Create a new array (list) by mapping over each category and save it in a variable | map
        // Create an HTML list item for each category | template literal
    // Combine the list of category elements into a single string | join
    // Insert the combined HTML into the categories element | innerHTML
    document.getElementById('categories').innerHTML = categories.map (category => `<li class="nav-item">
    <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
  </li>`).join('');

}

// 4. Add Products to the Cart
// Initialize an empty cart array | let
    
// Create a function to add a product to the cart. Receive the product as a parameter | function
function addProduct(product) {

    // Add the product to the cart array | push
    cart.push(product);
    // Display the product
        // Create an array by mapping over each item in the cart | map
            // Create an HTML list item for each product | template literal
        // Combine the mapped list of HTML items into a single string | join
      
    // Insert the combined HTML into the element with the ID 'cart' | getElementById, innerHTML
    document.getElementById('cart').innerHTML = cart.map(item => `<li>${item}</li>`).join('');

}
// 5. Create a specific function to display the cart. Obtain the code from the addToCart function.


// 6. Refactor Using JavaScript Methods to Create HTML Elements
function addProductMethod(Product) {
  const listItem = document.createElement('li');
  listItem.textContent = product;
  document.getEkementById('cart').appendChild(listItem);
  
}

// 7. Remove a Product from the Cart by index


// 8. Remove a Product from the Cart using filter()
