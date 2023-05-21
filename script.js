// function validateSignUpForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   if (name === "") {
//     alert("Please enter your name.");
//     return false;
//   }

//   if (email === "") {
//     alert("Please enter your email.");
//     return false;
//   }

//   if (password === "") {
//     alert("Please enter a password.");
//     return false;
//   }

//   // Additional validations can be added here

//   return true;
// }
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});
