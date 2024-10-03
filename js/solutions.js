//Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.ee-preloader-container');
    pagePreloader.classList.add('ee-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 1000);
});


// Scroll animation
var myScrollDown = document.querySelector('.ee-scroll-down');
var arrow_down_waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('ee-fade-out');
    },
    offset: '70%'
});


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


//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.ee-slider-container');
var sliderList = document.querySelector('.ee-slider-list');
var sliderItem = document.querySelectorAll('.ee-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.ee-item-prev');
var nextItem = document.querySelector('.ee-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.ee-current-slide');
var totalSlide = document.querySelector('.ee-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.ee-item-navigator a');
var navCounter = document.querySelector('.ee-navigator-counter span');


//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';


//Fazendo Animaçao do Slider onClick

//HANDLERS

//Next Slide Animaçao
var nextSlideAnim = function () {
    var lastItem = sliderListWidth - containerWidth;

    if ((-1 * (sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Prev Slide Animaçao
var prevSlideAnim = function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Counter Formater
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

//Counter Add
var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Set Active Nav
var setActiveNav = function () {

    for (var nv = 0; nv < navItems.length; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
        if (myNavNum == currentCounter) {
            navItems[nv].classList.add('ee-item-active');

            anime({
                targets: '.ee-item-active',
                width: 90
            });
        }
    }
}

var changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++) {
        navItems[rm].classList.remove('ee-item-active');

        anime({
            targets: navItems[rm],
            width: 20
        });
    }

    setActiveNav();
}


//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.ee-item-active',
    width: 90
});


nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();
});