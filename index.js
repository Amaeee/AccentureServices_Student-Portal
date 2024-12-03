document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const recaptcha = document.getElementById("recaptcha").checked;

  if (username === "Juan Dela Cruz" && password === "123456" && recaptcha) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("portal-container").style.display = "block";
  } else {
    alert("Invalid username, password, or captcha. Please try again.");
  }
});
