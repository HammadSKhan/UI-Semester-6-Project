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

  document.querySelector(".hamburger").classList.toggle("fa-spin");
});

window.addEventListener("resize", function (event) {
  if (window.innerWidth < 768) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
});
window.addEventListener("load", function () {
  if (window.innerWidth < 768) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
});

function setupModal(modalId, btnId) {
  var modal = document.getElementById(`${modalId}`);
  var btn = document.getElementById(`${btnId}`);
  var closeBtn = document.querySelector(`#${modalId}  .close`);

  btn.onclick = function () {
    modal.style.display = "block";
  };
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
setupModal("uploadImgModal", "uploadBtn");
setupModal("changePasswordModal", "changePasswordBtn");
