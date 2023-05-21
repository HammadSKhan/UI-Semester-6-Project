// Add JavaScript to update the sticky note content
window.addEventListener("DOMContentLoaded", function () {
  const noticeList = ["Notice 1", "Notice 2", "Notice 3"]; // Replace with your notice list
  const stickyNote = document.querySelector(".sticky-note");
  let currentIndex = 0;

  function showNextNotice() {
    stickyNote.innerHTML = noticeList[currentIndex];
    currentIndex = (currentIndex + 1) % noticeList.length;
  }

  showNextNotice();
  setInterval(showNextNotice, 5000); // Change the duration as desired
});
