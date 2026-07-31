// Get the modal element
const modal = document.querySelector(".modal");

// Get the button that opens the modal
const openBtn = document.getElementById("openModal");

// Get the close button element
const closeBtn = document.querySelector(".close-modal");

// 1. Open the modal when the "Open Modal" button is clicked
openBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// 2. Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// 3. Close the modal when clicking outside of the modal-content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});