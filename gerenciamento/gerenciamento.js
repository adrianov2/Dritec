//Seleciona os itens clicados no menu
var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir o menu
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
var header = document.querySelector('header');

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
    header.classList.toggle('expandido'); // Adiciona ou remove a classe 'expandido' no cabeçalho
});

//sub-menu indicadores
const indicadoresLink = document.getElementById('indicadores-link');
const submenuIndicadores = document.getElementById('submenu-indicadores');

indicadoresLink.addEventListener('click', function (event) {
    event.preventDefault();
    submenuIndicadores.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!indicadoresLink.contains(event.target)) {
        submenuIndicadores.classList.remove('show');
    }
});

//sub-menu producao
const producaoLink = document.getElementById('producao-link');
const submenuProducao = document.getElementById('submenu-producao');

producaoLink.addEventListener('click', function (event) {
    event.preventDefault();
    submenuProducao.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!producaoLink.contains(event.target)) {
        submenuProducao.classList.remove('show');
    }
});

// gerenciamento


function calcularSaldoFinal(deposito, resultado) {
    return deposito + resultado;
}

function calcularResultado(stopWin, stopLoss, deposito) {
    return stopWin - stopLoss;
}

function atualizarTabela() {
    const tabelaDados = document.getElementById('tabela-dados');

    // Limpar a tabela antes de preencher com novos dados
    tabelaDados.innerHTML = '';

    // Obter valores inseridos pelo usuário
    const metaDiaria = parseFloat(document.getElementById('meta-diaria').value) || 0;
    const metaPerdida = parseFloat(document.getElementById('meta-perdida').value) || 0;

    for (let i = 1; i <= 30; i++) {
        const stopWin = metaDiaria * i;
        const stopLoss = metaPerdida * i;
        const deposito = stopWin + stopLoss;
        const resultado = calcularResultado(stopWin, stopLoss, deposito);
        const saldoFinal = calcularSaldoFinal(deposito, resultado);

        const row = tabelaDados.insertRow();
        row.innerHTML = `
            <td>${i}</td>
            <td>${stopWin}</td>
            <td>${stopLoss}</td>
            <td>${deposito}</td>
            <td>${saldoFinal}</td>
            <td>${resultado}</td>
            <td>${saldoFinal - i * deposito}</td>`;
    }
}

// Chama a função de atualização da tabela ao carregar a página
window.addEventListener('load', atualizarTabela);
