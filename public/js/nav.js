const createNav = () => {
    
    let nav = document.querySelector(".navbar");
  
    nav.innerHTML = `
      <div class="nav">
              
          <img src="img/logo.png" class="brand-logo" alt="" />
          <div class="search">
              <ul class="links-container">

                <li class="link-item"><a href="#" style="font-size: 15px;" class="icon" onclick="myFunction()">&#9776;</a></li>
                <li class="link-item"><a href="./index.html" class="link">Home</a></li>
                <li class="link-item"><a href="./women.html" class="link">Women</a></li>
                <li class="link-item"><a href="./accessories.html" class="link">Accessories</a></li>
                <li class="link-item"><a href="./sales.html" class="link">Sale</a></li>
              </ul>
  
              </div>
          <div class="nav-items">
              
          <a href="./contact.html"><img src="img/mail.png" alt="" /></a>
          <a href="./signup.html"><img src="img/user.png" alt="" /></a>
          <a href="./cart.html"><img src="img/cart.png" alt="" /><span>0</span></a>
          </div>
      </div>
  
 
      `;
  };

  
  createNav();

  function myFunction() {
    var x = document.getElementByClassName("link");
    if (x.className === "link") {
      x.className += " responsive";
    } else {
      x.className = "links-container";
    }
  }
  




  // <input type="text" class="search-box" placeholder="search brand, product"/>
  // <button onclick = 'getResults()' class="search-button"> 
     
  //       <p class="arama">Search</p>
        
  
  //  </button>



//   <ul class="links-container">

//   <li class="link-item"><a href="#" style="font-size: 15px;" class="icon" onclick="myFunction()">&#9776;</a></li>
//   <li class="link-item"><a href="./index.html" class="link">home</a></li>
//   <li class="link-item"><a href="./women.html" class="link">women</a></li>
//   <li class="link-item"><a href="./accessories.html" class="link">accessories</a></li>
//   <li class="link-item"><a href="./sales.html" class="link">sale</a></li>
// </ul>