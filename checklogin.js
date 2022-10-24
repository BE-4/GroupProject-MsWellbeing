let navlog = document.getElementById("navlog");

function clearLocal() {
  localStorage.clear();
  location.href = "signin.html";
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("user") !== undefined) {
    navlog.innerHTML = `<button class="btn btn-sm btn-outline-success me-3" onclick="clearLocal()">Logout</button>`;
  } else {
    navlog.innerHTML = `<button class="btn btn-sm btn-outline-success me-3" onclick="location.href='signup.html'">Sign Up</button><button class="btn btn-sm btn-success" onclick="location.href='signin.html'">Sign In</button>`;
  }
});
