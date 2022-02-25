const searchResult = () => {
    let div = document.querySelector('.search-result');

    div.innerHTML = `

    <h2 class="heading">Bag Collection</h2>
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
    <h2 class="product-category">Sales</h2>
    <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">40% off</span>
                    <img src="img/6.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">24€ <del style="color: red">60€</del></h2>
                    <p class="product-short-des"> Pink jean Jacket κεντημένο με στρας και πέρλες</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="img/7.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">35€ <del style="color: red">70€</del></h2>
                    <p class="product-short-des">Maxi Skirt απο βαμβακερό φούξ τούλι</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">20% off</span>
                    <img src="img/5.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">124€ <del style="color: red">160€</del></h2>
                    <p class="product-short-des">Silky Touch Red Night Dress</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">20% off</span>
                    <img src="img/4.png" class="product-thumb" alt="">
                    <button class="card-btn">shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">80€ <del style="color: red">100€</del></h2>
                    <p class="product-short-des">Maxi multicolor dress 100% cotton..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">30% off</span>
                    <img src="img/1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">70€ <del style="color: red">100€</del></h2>
                    <p class="product-short-des">Velvet Silky Touch Green Dress..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">30% off</span>
                    <img src="img/2.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">70€ <del style="color: red">100€</del></h2>
                    <p class="product-short-des">Maxi Black Dress.</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">40% off</span>
                    <img src="img/3.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">84€ <del style="color: red">140€</del></h2>
                    <p class="product-short-des">Boho Touch White Outfit..</p>
                </div>
            </div>

        </div>
        <h2 class="heading" id="summer-col" >Summer Collection</h2> 
        <div  class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <img src="img/9-3-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart <i class="fa-solid fa-check"></i></button> 
                </div>
                <div class="product-info">
                    <h2 class="product-brand">70€</h2>
                    <p class="product-short-des">Handmade κεντημένο Jean 100% cotton | one piece, size small •</p>
                    
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/9-4.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">40€</h2>
                    <p class="product-short-des">Λευκό μπολερό που δένει | one piece, size small/medium.</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/10-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">110€</h2>
                    <p class="product-short-des">Handmade Hippie mini dress 100% Cotton με κεντημένες λεπτομέρειες | one size..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/11-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">110€</h2>
                    <p class="product-short-des">Blue Camouflage Maxi Dress 100% viscose | one piece, size medium..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/12-3.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">140€</h2>
                    <p class="product-short-des">White Cotton Lace Dress με κεντημένες λεπτομέρειες | one size..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/13-2.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">90€</h2>
                    <p class="product-short-des">Εμπριμέ μπλούζα viscose με σχέδιο τύπου versace..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/14-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">130€</h2>
                    <p class="product-short-des">See through waist dress with white tulle and pink flowers, 100% cotton..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/15-2.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">90€</h2>
                    <p class="product-short-des">Pareo Wrap Long Skirt με βολάν στο τελείωμα..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/16-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">100€</h2>
                    <p class="product-short-des">Ασύμμετρο φόρεμα με κεντημένες λεπτομέρειες και βολάν στο τελείωμα..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/18-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">100€</h2>
                    <p class="product-short-des">Mini full linen Dress with corset back..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/19-1.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">130€</h2>
                    <p class="product-short-des">Colorful maxi check Dress | size large..</p>
                </div>
            </div>
        </div>
        <h2 class="heading" id="winter-col" >Winter Collection</h2>
        <div class="product-container">
        <div class="product-card">
                <div class="product-image">
                    <img src="img/27.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">370€</h2>
                    <p class="product-short-des"> Green Coat | one piece, size small •</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/28.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">410€</h2>
                    <p class="product-short-des"> Light Brown Coat</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/29.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">390€</h2>
                    <p class="product-short-des">Jade Coat</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/30.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">270€</h2>
                    <p class="product-short-des">Brown Dress</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/31.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">290€</h2>
                    <p class="product-short-des">Grey Dress</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/32.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">280€</h2>
                    <p class="product-short-des">Red Dress</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/22.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">150€</h2>
                    <p class="product-short-des">Grey Jumper</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/23.png" class="product-thumb" alt="">

                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">180€</h2>
                    <p class="product-short-des">Grey Pancho</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/33.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">160€</h2>
                    <p class="product-short-des">Basic Green Dress</p>
                </div>
            </div>
        <div class="product-card">
                <div class="product-image">
                    <img src="img/34.png" class="product-thumb" alt="">
                    <button class="card-btn">add to shopping-cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">260€</h2>
                    <p class="product-short-des">Green Coat2</p>
                </div>
            </div>
        
        </div>
        `;
};

searchResult();

const productSearch = [
    {
        name: 'Italian Leather Bag',
        tag: 'bag-1',
        price: 120
    },
    {
        name: 'Dark Green Leather Bag',
        tag: 'bag-2',
        price: 100
    },
    {
        name: 'Green Straw Bag',
        tag: 'bag-3',
        price: 130
    },
    {
        name: 'Beige Shoulder Bag',
        tag: 'bag-4',
        price: 90
    },
    {
        name: 'Black Velvet Shoulder Bag',
        tag: 'bag-5',
        price: 80
    },
    {
        name: 'Dark Grey Leather Bag',
        tag: 'bag-6',
        price: 140
    },
    {
        name: 'B&W Stripes Shoulder Bag',
        tag: 'bag-7',
        price: 100
    },
    {
        name: 'Pink jean Jacket',
        tag: '6',
        price: 24
    },
    {
        name: 'Maxi Skirt',
        tag: '7',
        price: 35
    },
    {
        name: 'Silky Touch Red Night Dress',
        tag: '5',
        price: 124
    },
    {
        name: 'Maxi multicolor dress',
        tag: '4',
        price: 80
    },
    {
        name: 'Velvet Silky Touch Green Dress',
        tag: '1',
        price: 70
    },
    {
        name: 'Maxi Black Dress',
        tag: '2',
        price: 70
    },
    {
        name: 'Boho Touch White Outfit',
        tag: '3',
        price: 84
    },
    {
        name: 'Handmade Jean',
        tag: '9-3-1',
        price: 70
    },
    {
        name: 'White Bolero',
        tag: '9-4',
        price: 40
    },
    {
        name: 'Handmade Hippie mini dress',
        tag: '10-1',
        price: 110
    },
    {
        name: 'Blue Camouflage Maxi Dress',
        tag: '11-1',
        price: 110
    },
    {
        name: 'White Cotton Lace Dress',
        tag: '12-3',
        price: 140
    },
    {
        name: 'Εμπριμέ μπλούζα viscose',
        tag: '13-2',
        price: 90
    },
    {
        name: ' Waist Dress',
        tag: '14-1',
        price: 130
    },
    {
        name: 'Pareo Wrap Long Skirt',
        tag: '15-2',
        price: 90
    },
    {
        name: 'Ασύμμετρο φόρεμα',
        tag: '16-1',
        price: 100
    },
    {
        name: 'Mini full linen Dress',
        tag: '18-1',
        price: 100
    },
    {
        name: 'Colorful maxi check Dress',
        tag: '19-1',
        price: 130
    },
    {
        name: 'Green Coat',
        tag: '27',
        price: 370
    },
    {
        name: 'Light Brown Coat',
        tag: '28',
        price: 410
    },
    {
        name: 'Jade Coat',
        tag: '29',
        price: 390
    },
    {
        name: 'Brown Dress',
        tag: '30',
        price: 270
    },
    {
        name: 'Grey Dress',
        tag: '31',
        price: 290
    },
    {
        name: 'Red Dress',
        tag: '32',
        price: 280
    },
    {
        name: 'Grey Jumper',
        tag: '22',
        price: 150
    },
    {
        name: 'Grey Pancho',
        tag: '23',
        price: 180
    },
    {
        name: 'Basic green dress',
        tag: '33',
        price: 160
    },
    {
        name: 'Green Coat2',
        tag: '34',
        price: 260
    },
];



































function selectElement(selector) {
    return document.querySelector(selector);
}

function clearResults(){
    selectElement('.search-result').innerHTML = "";
}

function getResults() {
    const search = selectElement('.search-box').value;

    let div = document.querySelector('.search-result');

    
    clearResults()

    if (search.length > 0 ){
        for(let i = 0; i < array.length; i++)
        if (
            productSearch[i].name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            productSearch[i].tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ){

                    div.innerHtml += `
                                 <div class="product-container">
                                     <div class="product-card">
                                         <div class="product-image">
                                             <img src="./img/${productSearch.tag}.png" class="product-thumb" alt="">
                                             <button class="card-btn">add to shopping-cart</button>
                                         </div>
                                         <div class="product-info">
                                             <h2 class="product-brand">${productSearch.price}€</h2>
                                             <p class="product-short-des">${productSearch.name}</p>
                                         </div>
                                     </div>
                                 </div>
                                 `;
                             }
                         }
                     }
        
    
selectElement("search-button").addEventListener('keyup', getResults)



