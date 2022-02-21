let carts = document.querySelectorAll(".card-btn");

let products = [
  {
    name: "Italian Leather Bag",
    tag: "bag-1",
    price: 120,
    inCart: 0,
  },
  {
    name: "Dark Green Leather Bag",
    tag: "bag-2",
    price: 100,
    inCart: 0,
  },
  {
    name: "Green Straw Bag",
    tag: "bag-3",
    price: 130,
    inCart: 0,
  },
  {
    name: "Beige Shoulder Bag",
    tag: "bag-4",
    price: 90,
    inCart: 0,
  },
  {
    name: "Black Velvet Shoulder Bag",
    tag: "bag-5",
    price: 80,
    inCart: 0,
  },
  {
    name: "Dark Grey Leather Bag",
    tag: "bag-6",
    price: 140,
    inCart: 0,
  },
  {
    name: "B&W Stripes Shoulder Bag",
    tag: "bag-7",
    price: 100,
    inCart: 0,
  },
];


for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".nav-items span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".nav-items span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".nav-items span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}


function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".CartContainer");
  let shoppingCartTotal = document.querySelector(".shopping-cart-container");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
          <tr>
            <td><img src="./img/${item.tag}.png" style={{ height="120px" }} /></td>
            <td>${item.name}</td>
            <td> <div class="count">${item.inCart}</div></td>
            <td>${item.inCart * item.price}€</td>     
          </tr> `;
      });

      shoppingCartTotal.innerHTML += `
      
      <p class="total-container" id="total-price">Total Price : ${cartCost}€ </p>
        <a href="#" id="checkout-btn" class="cart-btn">Checkout</a>
        <a href="#" id="clear-cart" class="cart-btn">Clear Cart</a>
        
        `

  }
}



onLoadCartNumbers();
displayCart();




