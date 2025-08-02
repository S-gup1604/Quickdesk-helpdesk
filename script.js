document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@quickdesk.com" && password === "admin123") {
    alert("Login successful ✅");
    // Redirect to dashboard (example)
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials ❌");
  }
});