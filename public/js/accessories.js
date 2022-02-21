const bagCollection = () => {
    let section = document.querySelector('.bag-collections');

    section.innerHTML = `<h2 class="heading">Bag Collection</h2>
    <div class="product-container">
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-1.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">120€</h2>
                <p class="product-short-des">Italian Leather Bag</p>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-2.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">100€</h2>
                <p class="product-short-des">Dark Green Leather Bag</p>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-3.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">130€</h2>
                <p class="product-short-des">Green Straw Bag</p>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-4.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">90€</h2>
                <p class="product-short-des">Beige Shoulder Bag</p>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-5.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">80€</h2>
                <p class="product-short-des">Black Velvet Shoulder Bag</p>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-6.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">140€</h2>
                <p class="product-short-des">Dark Grey Leather Bag</p>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="img/bag-7.png" class="product-thumb" alt="">
                <button class="card-btn">add to shopping-cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">100€</h2>
                <p class="product-short-des">Black & White Stripes Shoulder Bag</p>
            </div>
        </div>
    </div>

    `;

};

bagCollection();