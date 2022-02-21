const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/logo.png" class="logo" alt="">
    </div>
    <p class="footer-title">About Aurora Fashion Boutique Store</p>
    <p class="info">With the unique women style in Athens, located in Nea Smyrni district, Aurora Fashion Boutique is a must-know name for anyone who likes masterfully curated brands from all over the world. Offering clothes for women, the stores bring independent international brands as well as major labels together for a dream shopping experience. The buyers are adept at finding statement pieces, from stylish bags, to summer and winter dresses and timeless jackets. In summer, the selection of beachwear makes it an essential stop before heading to the islands while throughout the year, you’ll find accessories and brand takeovers to keep you coming back for more.</p>
    <p class="info">Support email -  </p>
    <p class="info">Telephone - 21 3042 0743</p>
    <p class="info">Adress - Kon/nou Paleologou 26, Nea Smirni 171 22</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com/aurora_fashionboutique/" class="social-link1"><i class="fa-brands fa-instagram"></i> instagram</a>
            <a href="https://www.facebook.com/Aurora-Fashion-Boutique-557732391423676/" class="social-link1"><i class="fa-brands fa-facebook"></i> Facebook</a>
        </div>
    </div>
    <p class="footer-credit">Copyright ©2022 by <a href="https://github.com/ermansahin"> <i class="fa-brands fa-github-square"></i> Erman Sahin </a> </p>
    `;
}

createFooter();