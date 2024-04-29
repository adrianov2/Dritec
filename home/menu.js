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

// aumentando e diminuindo as coluna quando o menu de navegação e extendido

// Obtém referências para os elementos relevantes
const menuLateral = document.querySelector('nav.menu-lateral');
const buttonColumns = document.querySelector('.button-columns');
const columns = document.querySelectorAll('.button-column');

// Função para ajustar a largura das colunas
function ajustarLarguraColunas() {
    // Verifica se o menu está expandido ou não
    const menuExpandido = menuLateral.classList.contains('expandir');

    // Ajusta a largura das colunas com base no estado do menu
    columns.forEach(column => {
        column.style.flex = menuExpandido ? '0 0 calc(20% - 10px)' : '0 0 calc(23% - 10px)';
        column.style.maxWidth = menuExpandido ? 'calc(19% - 10px)' : 'calc(80% - 10px)';
    });

    // Ajusta a margem esquerda das colunas com base no estado do menu
    buttonColumns.style.marginLeft = menuExpandido ? '150px' : '50px';
}

// Adiciona um ouvinte de evento para detectar mudanças no estado do menu lateral
menuLateral.addEventListener('click', ajustarLarguraColunas);

// Adiciona um ouvinte de evento para detectar mudanças no tamanho da janela
window.addEventListener('resize', ajustarLarguraColunas);

// Chama a função inicialmente para garantir que as colunas tenham o tamanho correto no carregamento da página
ajustarLarguraColunas();


//----------------------------------------------------------------------------------------------------------------------


        function redirecionarParaWhatsApp() {
            // Número de telefone para redirecionar
            var numeroTelefone = 'SEU_NUMERO_DE_TELEFONE_AQUI';

            // URL para o WhatsApp
            var urlWhatsApp = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(numeroTelefone);

            // Redirecionar para o WhatsApp
            window.location.href = urlWhatsApp;
        }
    
        function redirecionarParaPaginaCriarConta() {
            // URL da nova página de criação de conta
            var urlCriarConta = 'file:///A:/programas/plataforma-lobo/cria%C3%A7ao%20a%20corretora/index.html'; // Altere conforme necessário

            // Redirecionar para a nova página de criação de conta
            window.location.href = urlCriarConta;
        }
    
    
        function redirecionarParaPaginaGerenciamento() {
            // URL da nova página de gerenciamento
            var urlGerenciamento = 'file:///A:/programas/plataforma-lobo/gerenciamento/index.html'; // Altere conforme necessário

            // Redirecionar para a nova página de gerenciamento
            window.location.href = urlGerenciamento;
        }
    
    function redirecionarParaPaginaRobos() {
        // Redireciona para a página desejada
        window.location.href = 'pagina_de_robos.html'; // Substitua 'pagina_de_robos.html' pelo URL da sua página de robôs
    }
    

// para dispositivos moveis 

document.addEventListener('DOMContentLoaded', function () {
    const btnExpandir = document.querySelector('.btn-expandir');
    const menuLateral = document.querySelector('nav.menu-lateral');

    btnExpandir.addEventListener('click', function () {
        menuLateral.classList.toggle('expandido');
        btnExpandir.classList.toggle('expandido');
    });
});

