const form = document.querySelector("#signup-form");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;

  if (!name || !email || !password) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  if (!form.elements.email.validity.valid) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "red";
    return;
  }

  localStorage.setItem(
    "signupDetails",
    JSON.stringify({ name, email, password })
  );

  message.textContent = "Signup successful!";
  message.style.color = "green";
  form.reset();
});