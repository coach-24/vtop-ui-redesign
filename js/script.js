function login() {
  window.location.href = "dashboard.html";
}
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("skeleton").style.display = "none";
  }, 700);
});
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

