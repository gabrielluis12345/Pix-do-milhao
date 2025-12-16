let index = 0;
const slides = document.querySelector('.slides');
const total = slides.children.length;

function show() {
  const slideWidth = document.querySelector('.slider').clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}


function next() {
  index = (index + 1) % total;
  show();
}

function prev() {
  index = (index - 1 + total) % total;
  show();
}

setInterval(next, 4000);

// =================================
// CONTROLE DE QUANTIDADE E PREÇO
// =================================

// quantidade inicial
let quantity = 3;

// valor por número
const pricePerUnit = 6.65;

// elementos da tela
const qtyEl = document.getElementById("qty");
const priceEl = document.getElementById("price");

// atualiza quantidade e valor
function updateUI() {
  if (!qtyEl || !priceEl) return;

  qtyEl.innerText = quantity;

  const total = (quantity * pricePerUnit).toFixed(2);
  priceEl.innerText = `R$ ${total.replace('.', ',')}`;
}

// botão + e -
function changeQty(value) {
  quantity += value;

  if (quantity < 1) quantity = 1;

  updateUI();
}

// botões rápidos +3 +10 +15...
function addQty(value) {
  quantity += value;
  updateUI();
}

// inicia com valores corretos
updateUI();


// ============================
// CONTADOR REAL (H:M:S)
// ============================

const targetDate = new Date("2025-12-16T21:00:00");

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);

  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  hoursEl.innerText = String(hours).padStart(2, "0");
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ============================
// IR PARA CHECKOUT
// ============================

function irCheckout() {
  const total = (quantity * pricePerUnit).toFixed(2);

  // redireciona para o checkout já existente
  window.location.href = `/checkout.html?qtd=${quantity}&valor=${total}`;
}
