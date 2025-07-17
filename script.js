const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm-password");

form.addEventListener("submit", function (e) {
  if (password.value !== confirm.value) {
    e.preventDefault();
    password.classList.add("error");
    confirm.classList.add("error");
  }
});
