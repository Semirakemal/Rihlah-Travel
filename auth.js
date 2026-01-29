/* ================= SIGN UP ================= */
const signupForm = document.getElementById('signup-form');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if user already exists
    if (localStorage.getItem(email)) {
      alert("User already registered. Please sign in.");
      return;
    }

    // Save user data
    const userData = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem(email, JSON.stringify(userData));

    alert("Account created successfully!");
    signupForm.reset();
    window.location.href = "signin.html"; // optional
  });
}

/* ================= SIGN IN ================= */
const signinForm = document.getElementById('signin-form');

if (signinForm) {
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      alert("Account not found or password is incorrect.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.password !== password) {
      alert("Incorrect password!");
      return;
    }

    alert("Login successfully");
    signinForm.reset();
    window.location.href = "dom (1).html";
  });
}