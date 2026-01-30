// ------------------ SIGNUP PAGE ------------------
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem('userInfo', JSON.stringify({name,email,password}));
    window.location.href = 'booking-details.html';
  });
}

// ------------------ BOOKING DETAILS PAGE ------------------
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;
    const room = document.getElementById('room').value;
    const passport = document.getElementById('passport').value;

    localStorage.setItem('bookingInfo', JSON.stringify({date, people, room, passport}));
    window.location.href = 'payment.html';
  });
}

// ------------------ PAYMENT PAGE ------------------
const packageSelect = document.getElementById("package");
const priceText = document.getElementById("price");
const paymentForm = document.getElementById("paymentForm");

if(packageSelect){
  const prices = {
    essential: "$2,499",
    premium: "$3,999",
    hajj: "$6,999"
  };

  packageSelect.addEventListener("change", () => {
    const selected = packageSelect.value;
    priceText.textContent = selected ? `Total Price: ${prices[selected]}` : "Total Price: —";
  });
}

if(paymentForm){
  paymentForm.addEventListener("submit", e => {
    e.preventDefault();

    const packageType = packageSelect.value;
    const screenshot = document.getElementById("screenshot").files[0];

    if (!packageType || !screenshot) {
      alert("Please complete all fields");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      const prices = {
        essential: "45,000 ETB",
        premium: "75,000 ETB",
        hajj: "350,000 ETB"
      };

      const paymentData = {
        package: packageType,
        price: prices[packageType],
        screenshot: reader.result,
        date: new Date().toLocaleString()
      };

      localStorage.setItem("paymentInfo", JSON.stringify(paymentData));
      window.location.href = "payment-success.html";
    };

    reader.readAsDataURL(screenshot);
  });
}

// ------------------ PAYMENT SUCCESS PAGE ------------------
const bookingInfoDiv = document.getElementById('booking-info');
if(bookingInfoDiv){
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
  const paymentInfo = JSON.parse(localStorage.getItem('paymentInfo'));

  if(!paymentInfo){
    alert("No payment info found!");
    window.location.href = "package-details.html";
  } else {
    const ref = 'RIH' + Math.floor(Math.random() * 1000000);
    bookingInfoDiv.innerHTML = `
      <p><strong>Booking Reference:</strong> ${ref}</p>
      <p><strong>Name:</strong> ${userInfo.name}</p>
      <p><strong>Email:</strong> ${userInfo.email}</p>
      <p><strong>Package:</strong> ${paymentInfo.package.charAt(0).toUpperCase() + paymentInfo.package.slice(1)}</p>
      <p><strong>Price:</strong> ${paymentInfo.price}</p>
      <p><strong>Travel Date:</strong> ${bookingInfo.date}</p>
      <p><strong>Number of Pilgrims:</strong> ${bookingInfo.people}</p>
      <p><strong>Room Type:</strong> ${bookingInfo.room}</p>
      <p><strong>Passport Number:</strong> ${bookingInfo.passport}</p>
      <p><strong>Bank Accounts:</strong><br/>
         CBE: 100012345678<br/>
         Abyssinia: 200098765432
      </p>
      <p><strong>Payment Screenshot:</strong></p>
      <img src="${paymentInfo.screenshot}" alt="Payment Screenshot" style="width:100%;border-radius:6px;margin-top:10px;">
    `;
  }
}
