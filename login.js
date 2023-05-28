// Add JavaScript to update the sticky note content
window.addEventListener("DOMContentLoaded", function () {
  const noticeList = [
    `<a href="#">
      <h5>Exclusive Discount Offer</h5>
      <p>FIREFLY is happy to announce an exclusive discount offer on our PAN-Asian Cuisine for SZABIST.</p></p>
     </a>`,
    `<a href="#" has-details="false" title="Generate Online Fees Challan" messageid="4485" type="notice">
          <h5>Generate Online Fees Challan</h5>
          <p>For creating Payment Challan <a id="link5" href="https://springzabdesk.szabist.edu.pk/FeePayment" target="_blank">Click Here</a>.For Re-printing Payment Challan<a id="link6" href="https://springzabdesk.szabist.edu.pk/FeePayment/Forms/frmFeePaymentChallanPrint.aspx" target="_blank">Click Here</a></p>
      </a>`,
    "Notice 3",
    "Notice 4",
    "Notice 5",
  ]; // Replace with your notice list
  const stickyNote = document.querySelectorAll(".sticky-note");
  let currentIndex = 0;

  function showNextNotice() {
    for (let i = 0; i < stickyNote.length; i++) {
      const element = stickyNote[i];
      element.innerHTML = noticeList[currentIndex];
      currentIndex = (currentIndex + 1) % noticeList.length;
    }
  }

  showNextNotice();
  setInterval(showNextNotice, 13000); // Change the duration as desired
});

function click1() {
  var username_ = document.getElementById("email");
  var password1_ = document.getElementById("password");
  var emailErrMsg = document.querySelector("#email-err");
  var passwordErrMsg = document.querySelector("#password-err");
  // emailErrMsg.innerHTML = "";
  // passwordErrMsg.innerHTML = "";
  emailErrMsg.style.display = "none";
  passwordErrMsg.style.display = "none";

  if (username_.value.trim() == "") {
    username_.classList.add("error");
    emailErrMsg.style.display = "block";
    emailErrMsg.innerHTML = "Must enter email";
  } else {
    username_.classList.remove("error");
  }
  if (password1_.value.trim() == "") {
    password1_.classList.add("error");
    passwordErrMsg.style.display = "block";
    passwordErrMsg.innerHTML = "Must enter password";
  } else {
    password1_.classList.remove("error");
  }
}

function ValidateEmail() {
  var inputTextEmail = document.getElementById("email");
  var emailErrMsg = document.querySelector("#email-err");
  emailErrMsg.style.display = "none";
  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!inputTextEmail.value.match(mailformat)) {
    emailErrMsg.style.display = "block";
    emailErrMsg.innerHTML = "Invalid email address!";
  } else {
  }
}

function ValidatePassword() {
  var inputTextPass = document.getElementById("password");
  var passwordErrMsg = document.querySelector("#password-err");
  passwordErrMsg.style.display = "none";
  var passw = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!inputTextPass.value.match(passw)) {
    passwordErrMsg.style.display = "block";
    passwordErrMsg.innerHTML = "must contain 8 chars 1 num & 1 special char";
  }
}

function validateLoginForm(e) {
  // e.preventDefault();
  var inputTextEmail = document.getElementById("email");
  var emailErrMsg = document.querySelector("#email-err");
  emailErrMsg.style.display = "none";
  var inputTextPass = document.getElementById("password");
  var passwordErrMsg = document.querySelector("#password-err");
  passwordErrMsg.style.display = "none";

  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  var passw = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;

  if (inputTextEmail.value.trim() == "" || inputTextPass.value.trim() == "") {
    click1();
  } else if (!inputTextEmail.value.match(mailformat)) {
    ValidateEmail();
  } else if (!inputTextPass.value.match(passw)) {
    ValidatePassword();
  } else {
    //? Successfully validated...
    window.location.href = "main.html";
  }
  return false;
}
