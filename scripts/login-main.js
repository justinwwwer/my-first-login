async function validatelogin() {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const errorMessage = document.getElementById("error-message")

  // Simple validattion
  if (username === "user" && password === "pass") {
    errorMessage.style.color = "Light blue";
    errorMessage.textContent = "Login successful!";

    const spinner = document.querySelector('.spinner');
    spinner.classList.add('spinner--show')

 
    setTimeout(() => {
      window.location.href = `${window.location.origin}/about-me.html`
    }, 3000);

  } else {
    errorMessage.style.color = "#fa0f0f";
    errorMessage.style.fontFamily = "Trebuchet MS "
    errorMessage.textContent =
      "Invalid username or password Try again"
  }
}



