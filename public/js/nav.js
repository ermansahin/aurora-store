const createNav = () => {
    
    let nav = document.querySelector(".navbar");
  
    nav.innerHTML = `
      <div class="nav">
              
          <img src="img/logo.png" class="brand-logo" alt="" />
          <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product"/>
                  <button class="search-button" onclick="search_product()"> search</button>
              </div>
          <div class="nav-items">
              
          <a href="./contact.html"><img src="img/mail.png" alt="" /></a>
          <a href="./signup.html"><img src="img/user.png" alt="" /></a>
          <a href="./cart.html"><img src="img/cart.png" alt="" /><span>0</span></a>
          </div>
      </div>
  
      <ul class="links-container">
          <li class="link-item"><a href="./index.html" class="link">home</a></li>
          <li class="link-item"><a href="./women.html" class="link">women</a></li>
          <li class="link-item"><a href="./accessories.html" class="link">accessories</a></li>
          <li class="link-item"><a href="./sales.html" class="link">sale</a></li>
      </ul>
      `;
  };
  
  createNav();
  