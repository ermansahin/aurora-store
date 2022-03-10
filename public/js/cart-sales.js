let carts = document.querySelectorAll('.card-btn');

let products = [
    {
        name: 'Pink jean Jacket',
        tag: '6',
        price: 24,
        inCart: 0
    },
    {
        name: 'Maxi Skirt',
        tag: '7',
        price: 35,
        inCart: 0
    },
    {
        name: 'Silky Touch Red Night Dress',
        tag: '5',
        price: 124,
        inCart: 0
    },
    {
        name: 'Maxi multicolor dress',
        tag: '4',
        price: 80,
        inCart: 0
    },
    {
        name: 'Velvet Silky Touch Green Dress',
        tag: '1',
        price: 70,
        inCart: 0
    },
    {
        name: 'Maxi Black Dress',
        tag: '2',
        price: 70,
        inCart: 0
    },
    {
        name: 'Boho Touch White Outfit',
        tag: '3',
        price: 84,
        inCart: 0
    },
    
];

for ( let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
        alert('The product chosen has been successfully added to the shopping cart!')
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.nav-items span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1 );
        document.querySelector('.nav-items span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav-items span').textContent = 1
    }    

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if ( cartItems[product.tag] == undefined ) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }

}


onLoadCartNumbers();