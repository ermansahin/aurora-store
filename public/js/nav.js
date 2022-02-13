const createNav = () => {
    let nav = document.querySelector(".navbar");
  
    nav.innerHTML = `
      <div class="nav">
              
          <img src="img/logo.png" class="brand-logo" alt="" />
          <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product"/>
                  <button class="search-btn"> search</button></a>
              </div>
          <div class="nav-items">
              
          <a href="#"><img src="img/mail.png" alt="" /></a>
          <a href="#"><img src="img/heart.png" alt="" /></a>
          <a href="./signup.html"><img src="img/user.png" alt="" /></a>
          <a href="#"><img src="img/cart.png" alt="" /></a>
          </div>
      </div>
  
      <ul class="links-container">
          <li class="link-item"><a href="./index.html" class="link">home</a></li>
          <li class="link-item"><a href="#" class="link">women</a></li>
          <li class="link-item"><a href="#" class="link">accessories</a></li>
          <li class="link-item"><a href="#" class="link">sale</a></li>
      </ul>
      `;
  };
  
  createNav();
  