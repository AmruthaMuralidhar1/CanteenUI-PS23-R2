let cart = [];

// Function to update the cart
function updateCart() {
  let cartList = document.querySelector('#cart-items');
  let cartTotal = document.querySelector('#cart-total');

  cartList.innerHTML = '';
  cart.forEach(item => {
    let li = document.createElement('li');
    li.innerText = `${item.name} - Rs.${item.price}`;
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-from-cart');
    removeButton.addEventListener('click', () => {
      removeFromCart(item.name, item.price);
    });
    li.appendChild(removeButton);
    cartList.appendChild(li);
  });

  cartTotal.innerText = `Rs.${getCartTotal()}`;
}

// Function to get the total price of items in the cart
function getCartTotal() {
  return cart.reduce((total, item) => total + item.price, 0);
}

//Function to add an item to the cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

 //Function to remove an item from the cart
function removeFromCart(name, price) {
  cart = cart.filter(item => item.name !== name || item.price !== price);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}


// Add event listeners for each "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    let item = button.closest('.food-item');
    let name = item.querySelector('.item-name').innerText;
    let price = parseInt(item.querySelector('.item-price').innerText.slice(3));
    addToCart(name, price);
  });
});

// Add event listeners for each "Remove" button
document.querySelectorAll('.remove-from-cart').forEach(button => {
  button.addEventListener('click', () => {
    let item = button.closest('li');
    let name = item.innerText.split(' - ')[0];
    let price = parseInt(item.innerText.split(' - ')[1].slice(4));
    removeFromCart(name, price);
  });
});

// Display cart on page load
displayCart();

//Function to display the cart
function displayCart() {
  let cartList = document.querySelector('#cart-items');

  cartList.innerHTML = '';
  cart.forEach(item => {
    let li = document.createElement('li');
    li.innerText = `${item.name} - Rs.${item.price}`;
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-from-cart');
    removeButton.addEventListener('click', () => {
      removeFromCart(item.name, item.price);
    });
    li.appendChild(removeButton);
    cartList.appendChild(li);
  });
}



// Function to get the cart from local storage
function getCartFromStorage() {
  let storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

getCartFromStorage();
updateCart();


function placeOrder() {
  document.querySelector('#order-section').style.display = 'block';
}

function signOut() {
    var confirmSignOut = confirm("Are you sure you want to sign out?");
    if (confirmSignOut == true) {
        window.location.href = "home.html";
    }
}

function login() {
             window.location.href = "login.html";
}


