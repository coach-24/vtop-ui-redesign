document.addEventListener("DOMContentLoaded", () => {

  // SIDEBAR TOGGLE
  window.toggleSidebar = function () {
  document.getElementById("sidebar").classList.toggle("collapsed");
};



  // DARK MODE
  window.toggleDark = function () {
    document.body.classList.toggle("dark");
  };

  // PAGE SWITCHING (Dashboard / Attendance / Exams)
  window.showPage = function (pageId) {
    document.querySelectorAll(".page").forEach(p =>
      p.classList.remove("active")
    );
    document.getElementById(pageId).classList.add("active");
  };

  // SIDEBAR SUBMENU TOGGLE
window.toggleSubMenu = function (el) {
  const currentGroup = el.parentElement;

  // Close all other menus
  document.querySelectorAll(".menu-group.open").forEach(group => {
    if (group !== currentGroup) {
      group.classList.remove("open");
    }
  });

  // Toggle current menu
  currentGroup.classList.toggle("open");
};


  // PROFILE CARD TOGGLE
  window.toggleProfile = function () {
    document.getElementById("profileCard").classList.toggle("show");
  };

  // CLOSE PROFILE WHEN CLICKING OUTSIDE
  document.addEventListener("click", function (e) {
    const profile = document.querySelector(".profile");
    const card = document.getElementById("profileCard");

    if (!profile || !card) return;

    if (!profile.contains(e.target) && !card.contains(e.target)) {
      card.classList.remove("show");
    }
  });

});


setTimeout(() => {
  const skeleton = document.getElementById("dashboardSkeleton");
  const content = document.getElementById("dashboardContent");

  if (skeleton && content) {
    skeleton.style.display = "none";
    content.classList.remove("hidden");
  }
}, 800); // 0.8s feels perfect

document.addEventListener("DOMContentLoaded", () => {

  const hasVisited = localStorage.getItem("hasVisited");
  const appSkeleton = document.getElementById("appSkeleton");
  const dashboardSkeleton = document.getElementById("dashboardSkeleton");
  const dashboardContent = document.getElementById("dashboardContent");

  if (!hasVisited) {
    // FIRST VISIT → show skeleton
    setTimeout(() => {
      if (appSkeleton) appSkeleton.style.display = "none";
      if (dashboardSkeleton) dashboardSkeleton.style.display = "none";
      if (dashboardContent) dashboardContent.classList.remove("hidden");

      localStorage.setItem("hasVisited", "true");
    }, 900); // smooth but fast
  } else {
    // RETURN VISIT → skip skeleton
    if (appSkeleton) appSkeleton.style.display = "none";
    if (dashboardSkeleton) dashboardSkeleton.style.display = "none";
    if (dashboardContent) dashboardContent.classList.remove("hidden");
  }

});



function signOut() {
  // optional: clear session data later if you add auth
  window.location.href = "index.html";
}

function loadPage(page) {
  document.querySelector(".main").innerHTML =
    `<iframe src="./pages/${profile}.html" class="page-frame"></iframe>`;
}
