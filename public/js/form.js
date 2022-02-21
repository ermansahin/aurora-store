// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector("#name");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');


submitBtn.addEventListener('click', () => {
    if(name.value.length < 3){
        showAlert('Name must be 3 letters or longer');
    } else if(!email.value.length){
        showAlert('Enter your email');
    } else if(password.value.length < 8){
        showAlert('Password should be 8 letters long');
    } else if(!number.value.length){
        showAlert('Enter your phone number');
    } else if(!Number(number.value) || number.value.length < 10){
        showAlert('Invalid number, please enter valid one');
    } else if(!tac){
        showAlert('You must agree to our terms and conditions');
    } else{
        // submit form
        // console.log({
        //     name: name.value,
        //     email: email.value,
        //     password: password.value,
        //     number: number.value,
        //     tac: tac.checked,
        //     notification: notification.checked,
        //     seller: false
        // })
        var data = {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        }
        fetch("/signup", {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(data)
        }).then((res)=> res.json())
        .then(response => {
            processData(response);
        })
        // sendData('/signup', {
        //     name: name.value,
        //     email: email.value,
        //     password: password.value,
        //     number: number.value,
        //     tac: tac.checked,
        //     notification: notification.checked,
        //     seller: false
        // })
    }
})

const processData = (data) => {
    if(data.alert) {
        showAlert(data.alert);
    } else if(data.name){
        // console.log(data); // create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}
// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

// send data function
const sendData = (path, data) => {
    fetch("/signup", {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res)=> res.json())
    .then(response => {
        processData(response);
    })
  // .then(response => {
}                                   // processData(response); })




// redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}