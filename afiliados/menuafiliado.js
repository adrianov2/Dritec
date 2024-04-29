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

//js para redirecionar


    function toggleMenu() {
        const nav = document.querySelector('nav');
        const ul = nav.querySelector('ul');
        ul.classList.toggle('show');
        nav.classList.toggle('collapsed');
    }

    window.addEventListener("scroll", function () {
        var header = document.getElementById("header");
        if (window.scrollY > 0) {
            header.classList.add("header-collapsed");
        } else {
            header.classList.remove("header-collapsed");
        }
    });

    function openAffiliatePage() {
        // Aqui você pode redirecionar para a página de afiliados ou adicionar o comportamento desejado.
        alert('Redirecionando para a página de afiliados.');
        // Exemplo de redirecionamento: window.location.href = './afiliados/index.html';
    }
