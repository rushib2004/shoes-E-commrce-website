document.getElementById("login-box").addEventListener("login-btn", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Dummy validation logic
    if (email === "Rushikeshbembale54@Gmail.com" && password === "Rushi@2004") {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
  