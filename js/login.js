// Add JavaScript to update the sticky note content
window.addEventListener("DOMContentLoaded", function () {
  const noticeList = [
    `<div href="#">
      <h5>Exclusive Discount Offer</h5>
      <p>FIREFLY is happy to announce an exclusive discount offer on our PAN-Asian Cuisine for SZABIST.</p></p>
     </div>`,
    `<div href="#">
          <h5>Generate Online Fees Challan</h5>
          <p>For creating Payment Challan <a id="link5" href="https://springzabdesk.szabist.edu.pk/FeePayment" target="_blank">Click Here</a>.For Re-printing Payment Challan<a id="link6" href="https://springzabdesk.szabist.edu.pk/FeePayment/Forms/frmFeePaymentChallanPrint.aspx" target="_blank">Click Here</a></p>
      </div>`,
    `<div href="#" has-details="false" title="SZABIST Need-Based Scholarship 2022-23" messageid="4483" type="notice">
        <h5>SZABIST Need-Based Scholarship 2022-23</h5>
        <p>We have Re-Opened SZABIST Need-Based Scholarship 22-23 applications for New Students. For further details please visit: <a id="link7" target="_blank" href="https://www.facebook.com/groups/SZABISTERFA/posts/1600966787008722/"> here </a></p>
    </div>`,
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

function validateLoginForm(e) {
  // var fullName = document.getElementById("fullName");
  var email = document.getElementById("email");
  // var phone = document.getElementById("phone");
  var password = document.getElementById("password");
  // var confirmPassword = document.getElementById("confirmPassword2");

  //reset
  // resetFields("fullName");
  resetFields("email");
  // resetFields("phone");
  resetFields("password");
  // resetFields("confirmPassword2");

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (email.value.trim() == "") {
    erroMessageEmptyFields("email");
  } else if (!email.value.match(mailformat)) {
    errorMessageInvalidFields("email", "Format abc@xyz.com");
  }

  if (password.value.trim() == "") {
    erroMessageEmptyFields("password");
  } else if (!password.value.match(passw)) {
    errorMessageInvalidFields(
      "password",
      "must contain 8 chars 1 num & 1 special char"
    );
  }
}

function resetFields(id) {
  document.querySelector(`#${id} ~ .side-error`).innerHTML = "";
  document.querySelector(`#${id}`).classList.remove("error");
}

function erroMessageEmptyFields(id) {
  var element = document.querySelector(`#${id}`);
  var errorClass = document.querySelector(`#${id} ~ .side-error`);
  element.classList.add("error");
  errorClass.innerHTML = "Please enter field";
}

function errorMessageInvalidFields(id, msg) {
  var element = document.querySelector(`#${id}`);
  var errorClass = document.querySelector(`#${id} ~ .side-error`);
  element.classList.add("error");
  errorClass.innerHTML = `${msg}`;
}
