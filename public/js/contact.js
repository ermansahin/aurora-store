 // listen to the form submission
   document
   .getElementById("myForm")
   .addEventListener("submit", function (event) {
     event.preventDefault();

     const serviceID = "service_dzrfptj";
     const templateID = "template_bdx4gdw";

     // send the email here
     emailjs.sendForm(serviceID, templateID, this).then(
       (response) => {
        document.querySelector('.alert').style.display = 'block';  
       },
       (error) => {
        document.querySelector('.alert1').style.display = 'block'; 
       }
     );
   });
   

   


// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "ermansahin92@gmail.com",
//         Password : "Atina2017",
//         To : 'lamigume@windowslive.com',
//         From : document.getElementById('email').value,
//         Subject : "New Contact From Enquiry",
//         Body : "Name: " + document.getElementById('name').value
//             + "<br> Email: " + document.getElementById('email').value
//             +"<br> Subject: " + document.getElementById('subject').value
//             +"<br> Message: " + document.getElementById('message').value
//     }).then(
//       message => alert('Message Sent Successfully')
//     );
// }