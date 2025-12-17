// ============================
// PRODUTOS (2 AÇÕES SEPARADAS)
// ============================

const products = {
  top: {
    qty: 3,
    price: 6.65,
    min: 1, // Não há limite para o produto de cima
    qtyEl: document.getElementById("qty-top"),
    priceEl: document.getElementById("price-top")
  },
  bottom: {
    qty: 30, // Começa com 30
    price: 0.20,
    min: 30, // Mínimo = 30
    qtyEl: document.getElementById("qty-bottom"),
    priceEl: document.getElementById("price-bottom")
  }
};

// Atualiza a interface de quantidade e preço
function updateUI(key) {
  const p = products[key];
  if (!p.qtyEl || !p.priceEl) return;

  // Garante que a quantidade nunca seja menor que o limite mínimo
  if (p.qty < p.min) p.qty = p.min;

  p.qtyEl.innerText = p.qty;
  const total = (p.qty * p.price).toFixed(2).replace('.', ',');
  p.priceEl.innerText = `R$ ${total}`;
}

// Função para alterar a quantidade com + ou -
function changeQty(key, value) {
  const p = products[key];
  p.qty += value;

  // Garante que a quantidade nunca seja menor que o limite mínimo
  if (p.qty < p.min) p.qty = p.min;

  updateUI(key);
}

// Função para alterar a quantidade com os botões rápidos (+3, +10, etc)
function addQty(key, value) {
  const p = products[key];
  if (p.qty < p.min) p.qty = p.min; // Garante que a quantidade nunca fique abaixo do mínimo
  p.qty += value;
  updateUI(key);
}

// Função para o checkout
function irCheckout(key) {
  const p = products[key];
  const total = (p.qty * p.price).toFixed(2);

  window.location.href = `/checkout.html?qtd=${p.qty}&valor=${total}`;
}

// Inicializa as quantidades e preços
updateUI("top");
updateUI("bottom");

// ============================
// CONTADOR (H:M:S)
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
  hoursEl.innerText = String(Math.floor((totalSeconds / 3600) % 24)).padStart(2, "0");
  minutesEl.innerText = String(Math.floor((totalSeconds / 60) % 60)).padStart(2, "0");
  secondsEl.innerText = String(totalSeconds % 60).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ============================
// CONTADOR 2


  let minutosRestantes = 8640; // 6 dias

  const countdownEl = document.getElementById('countdown');

  function atualizarCountdown() {
    if (minutosRestantes <= 0) {
      countdownEl.innerText = 'Sorteio iniciado';
      clearInterval(timer);
      return;
    }

    // CONVERSÃO
    const dias = Math.floor(minutosRestantes / 1440);
    const horas = Math.floor((minutosRestantes % 1440) / 60);
    const minutos = minutosRestantes % 60;

    let texto = '';

    if (dias > 0) {
      texto = `${dias} dia${dias > 1 ? 's' : ''}`;
    } else if (horas > 0) {
      texto = `${horas} hora${horas > 1 ? 's' : ''}`;
    } else {
      texto = `${minutos} minuto${minutos > 1 ? 's' : ''}`;
    }

    countdownEl.innerText = texto;
    minutosRestantes--;
  }

  atualizarCountdown();
  const timer = setInterval(atualizarCountdown, 60000);





