function validatelogin() {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value 
  const errorMessage = document.getElementById("error-message")

  // Simple validattion
  if (username === "user" && password === "pass") {
      errorMessage.style.color = "grean";
      errorMessage.textContent = "Login successful!";

      setTimeout(()=>{
          window.location.href =`/about-me.html`
          console.log(window.location)
      }, 5000);

  } else {
      errorMessage.style.color = "#fa0f0f";
      errorMessage.style.fontFamily="Trebuchet MS "
      errorMessage.textContent = 
      "Invalid username or password Try again"
  }
}

