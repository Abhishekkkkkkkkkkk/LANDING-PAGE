document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
});
