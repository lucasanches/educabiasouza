const textContainer = document.querySelector('.ee-text-container');
const logoHome = document.querySelector('.ee-logo-home');
const middleText = document.querySelector('.ee-middle-text-container');
const animationContainer = document.querySelector('.ee-animation-container');
const bar = document.querySelector('.ee-bar');

//Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.ee-preloader-container');
    pagePreloader.classList.add('ee-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 1000);
});


// window.addEventListener('load', function () {
//     var pagePreloader = document.querySelector('.ee-preloader-container');

//     // Adiciona um atraso artificial para testar a animação
//     setTimeout(function () {
//         pagePreloader.classList.add('ee-fade-out');

//         // Oculta o preloader após a animação de desvanecimento
//         setTimeout(function () {
//             pagePreloader.style.display = 'none';
//         }, 2000); // Tempo da animação de desvanecimento (1 segundo)
//     }, 4000); // Adiciona um atraso artificial de 3 segundos
// });


// Scroll animation
var myScrollDown = document.querySelector('.ee-scroll-down');
var arrow_down_waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('ee-fade-out');
    },
    offset: '70%'
});



let stage = 0;
let animationActive = false; // Controle de execução da animação

// Função para verificar o tamanho da tela
function checkScreenSize() {
    if (window.innerWidth >= 1200 && !animationActive) {
        // Inicia a animação se a largura for maior ou igual a 1200px
        animationActive = true;
        setTimeout(animate, 1000); // Dá uma pausa inicial
    } else if (window.innerWidth < 1200 && animationActive) {
        // Para a animação se a tela for menor que 1200px
        resetAnimation();
        animationActive = false;
    }
}

// Função de animação
function animate() {
    if (!animationActive) return; // Não continua a animação se ela for desativada

    switch (stage) {
        case 0:
            animationContainer.classList.add('ee-separate');
            bar.classList.add('ee-bar-expand');
            stage = 1;
            setTimeout(animate, 1000); // Espera a separação terminar
            break;
        case 1:
            middleText.classList.add('ee-show-text');
            stage = 2;
            setTimeout(animate, 2000); // Mantém o texto no centro por um tempo
            break;
        case 2:
            setTimeout(function () {
                middleText.classList.remove('ee-show-text');
                middleText.classList.add('ee-hide-text');
            }, 1000);
            setTimeout(() => {
                bar.classList.remove('ee-bar-expand');
                bar.classList.add('ee-bar-retract');
            }, 500); // Adiciona um atraso de 0.5 segundos
            stage = 3;
            setTimeout(animate, 1500); // Espera a animação do texto e da barra
            break;
        case 3:
            animationContainer.classList.remove('ee-separate');
            animationContainer.classList.add('ee-return');
            middleText.classList.remove('ee-hide-text');
            stage = 4;
            setTimeout(animate, 1000); // Espera os elementos voltarem ao centro
            break;
        case 4:
            animationContainer.classList.remove('ee-return');
            bar.classList.remove('ee-bar-retract'); // Remove a classe de recolhimento
            stage = 0;
            setTimeout(animate, 2000); // Reinicia o loop
            break;
    }
}

// Função para reiniciar a animação caso a tela fique menor que 1200px
function resetAnimation() {
    stage = 0; // Reseta o estágio da animação
    animationContainer.classList.remove('ee-separate', 'ee-return');
    bar.classList.remove('ee-bar-expand', 'ee-bar-retract');
    middleText.classList.remove('ee-show-text', 'ee-hide-text');
}

// Verifica o tamanho da tela ao carregar a página
checkScreenSize();

// Monitora mudanças no tamanho da tela
window.addEventListener('resize', checkScreenSize);



//WhatsApp Widget
let isChatboxVisible = false;
const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");

function hideChatbox() {
    isChatboxVisible = false;
    chatbox.style.display = "none";
}

function toggleChatbox() {
    isChatboxVisible = !isChatboxVisible;
    chatbox.style.display = isChatboxVisible ? "block" : "none";
}


//Missio, vision and values animation click
window.addEventListener('load', function () {
    const flipBoxes = document.querySelectorAll('.ee-flip-box');

    function handleClick() {
        const innerBox = this.querySelector('.ee-flip-box-inner');
        innerBox.style.transform = innerBox.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    }

    // Função para ativar eventos de clique em telas pequenas
    function enableClickEvents() {
        flipBoxes.forEach(box => {
            box.style.cursor = 'pointer';
            box.addEventListener('click', handleClick);
        });
    }

    // Verifica o tamanho da tela ao carregar a página
    if (window.innerWidth <= 992) {
        enableClickEvents();
    }
});


window.addEventListener('load', function () {
    var culturaSection = document.getElementById('ee-cultura-section');
    var culturaTrigger = document.querySelector('.ee-cultura-trigger');
    var footer = document.querySelector('footer'); // Referência ao rodapé

    if (culturaSection && culturaTrigger && footer) {
        // Waypoint para quando rolar para baixo e a seção Cultura aparecer
        new Waypoint({
            element: culturaSection,
            handler: function (direction) {
                if (direction === 'down') {
                    culturaTrigger.classList.add('ee-cultura-animate');
                } else {
                    culturaTrigger.classList.remove('ee-cultura-animate');
                }
            },
            offset: '60%'
        });

    } else {
        console.error("Alguns elementos não foram encontrados.");
    }
});

//Footer
const emailIcon = document.getElementById('email-icon');
const emailPopup = document.getElementById('email-popup');

emailIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    emailPopup.style.display = emailPopup.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function () {
    emailPopup.style.display = 'none';
});

emailPopup.addEventListener('click', function (event) {
    event.stopPropagation();
});