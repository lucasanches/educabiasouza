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
