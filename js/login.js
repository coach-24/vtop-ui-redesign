function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

function login() {
  const regno = document.getElementById("regno").value.trim();
  const password = document.getElementById("password").value.trim();

  const btn = document.getElementById("loginBtn");
  const spinner = document.getElementById("spinner");
  const text = document.getElementById("btnText");

  // FIXED CREDENTIALS
  const FIXED_REGNO = "23BCE1234";
  const FIXED_PASSWORD = "vit@123";

  if (!regno || !password) {
    alert("Please enter Registration Number and Password");
    return;
  }

  // SHOW LOADING
  btn.disabled = true;
  spinner.classList.remove("hidden");
  text.innerText = "Logging in...";

  setTimeout(() => {
    if (regno === FIXED_REGNO && password === FIXED_PASSWORD) {
      // SAVE LOGIN STATE
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid Registration Number or Password");

      // RESET BUTTON
      btn.disabled = false;
      spinner.classList.add("hidden");
      text.innerText = "Submit";
    }
  }, 1200);
}

// Enter key login support
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});
