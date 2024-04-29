// Lista de bots disponíveis
const bots = {
  'bot1': { name: 'Bot avietor', telegramChannel: '@bot_avitor_bot', value: 10, backgroundImage: './img/01.jpg' },
  'bot2': { name: 'bot spaceman', telegramChannel: '@botsspaceman_bot', value: 15, backgroundImage: './img/02.jpg' },
  'bot3': { name: 'Bot Blaze', telegramChannel: '@meussinaisblaze_bot', value: 20, backgroundImage: './img/04.jpg' },
  'bot4': { name: 'Bot dark', telegramChannel: '@darknewbot_bot', value: 25, backgroundImage: './img/09.jpg' },
  'bot5': { name: 'Bot estrela', telegramChannel: '@estrelabot_bot', value: 30, backgroundImage: './img/03.jpg' },
  'bot6': { name: 'Bot space', telegramChannel: '@robospaceman10_bot', value: 35, backgroundImage: './img/07.jpg' }
  // Adicione mais bots conforme necessário
};

// Função para criar a lista de bots na página inicial
function createBotList() {
  const botList = document.getElementById('botList');
  for (const botId in bots) {
    const bot = bots[botId];
    const botDiv = document.createElement('div');
    botDiv.classList.add('bot');
    botDiv.style.backgroundImage = `url('${bot.backgroundImage}')`;
    
    const botName = document.createElement('h2');
    botName.textContent = bot.name;
    botDiv.appendChild(botName);

    const paymentButton = document.createElement('button');
    paymentButton.textContent = `Pagar $${bot.value}`;
    paymentButton.classList.add('payment-btn');
    paymentButton.addEventListener('click', function() {
      redirectToMercadoPago(bot.value, botId);
    });
    botDiv.appendChild(paymentButton);
    
    botList.appendChild(botDiv);
  }
}

// Função para redirecionar para o Mercado Pago
function redirectToMercadoPago(amount, botId) {
  // Substitua 'SEU_ID_DO_VENDEDOR' pelo seu ID de vendedor do Mercado Pago
  window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_DO_VENDEDOR&external_reference=${botId}&amount=${amount}&auto_return=all`;
}

// Se estamos na página de pagamento, chamamos a função processPayment diretamente
if (window.location.pathname.includes('payment.html')) {
  processPayment();
} else {
  createBotList();
}

// Função para processar o pagamento
function processPayment() {
  const urlParams = new URLSearchParams(window.location.search);
  const botId = urlParams.get('bot');
  const bot = bots[botId];
  if (!bot) {
    alert('Bot não encontrado');
    return;
  }

  // Simulação de processamento de pagamento (substitua esta lógica pela integração real com o Mercado Pago)
  setTimeout(() => {
    const telegramChannel = bot.telegramChannel;
    window.location.href = `https://t.me/${telegramChannel}`; // Redireciona para o canal do Telegram após o pagamento bem-sucedido
  }, 3000); // Simula um tempo de espera de 3 segundos para o processamento do pagamento (substitua pelo tempo real de processamento)
}

//Expandir o menu
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
var header = document.querySelector('header');

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
    header.classList.toggle('expandido'); // Adiciona ou remove a classe 'expandido' no cabeçalho
    
    // Adiciona ou remove a classe 'colunas-expandidas' no contêiner das colunas
    document.querySelector('.colunas-container').classList.toggle('colunas-expandidas');
});
