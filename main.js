
const buttons = document.querySelectorAll(".add-button");
const count = document.getElementById("count");
const cart = document.getElementById("cart");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const form = document.getElementById("newsletterForm");
const message = document.getElementById("message");

let total = 0;

// Mahsulotni savatga qo‘shish
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    total = total + 1;
    count.textContent = total;
    button.textContent = "Qo‘shildi ✓";
  });
});

// Savatni ko‘rish
cart.addEventListener("click", function() {
  alert("Savatda " + total + " ta mahsulot bor.");
});

// Mobil menyu
menuButton.addEventListener("click", function() {
  menu.classList.toggle("show");
});

// Menyu havolasini bosganda menyuni yopish
menu.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    menu.classList.remove("show");
  });
});

// Email formasiga xabar chiqarish
form.addEventListener("submit", function(event) {
  event.preventDefault();
  message.textContent = "Rahmat! Obunangiz qabul qilindi.";
  form.reset();
});
const LOGIN = "admin";
const PAROL = "1234";

const loginDiv = document.getElementById("login");
const siteDiv = document.getElementById("site");
function kirish() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === LOGIN && p === PAROL) {
    sessionStorage.setItem("kirgan", "ha");
    sahifaniKorsat();
  } else {
    document.getElementById("xato").textContent = "Login yoki parol xato";
  }
}

function chiqish() {
  sessionStorage.removeItem("kirgan");
  sahifaniKorsat();
}

function sahifaniKorsat() {
  if (sessionStorage.getItem("kirgan") === "ha") {
    loginDiv.style.display = "none";
    siteDiv.style.display = "block";
  } else {
    loginDiv.style.display = "block";
    siteDiv.style.display = "none";
  }
}

sahifaniKorsat();