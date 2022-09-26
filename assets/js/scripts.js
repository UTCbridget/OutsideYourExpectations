import Alpine from 'alpinejs'
import AOS from "aos"
// import "jquery"
// import Blazy from "blazy"
import "./raverss"

window.Alpine = Alpine

Alpine.start()

// <!--Initialize AOS-->
AOS.init({ easing: 'ease-out-back', duration: 1000 });

// <!--Apply Now ribbon-->
const ribbon = document.getElementById("menuribbon");
ribbon.onmouseover = function() {
    this.classList.remove("up");
    this.classList.add("down");
};
ribbon.onmouseout = function() {
    this.classList.remove("down");
    this.classList.add("up");
};

// <!--Mobilize the menu-->
window.onload = function() {
    let navbar = document.querySelector(".nav-primary");
    let navLinks = document.querySelector("#nav-links");
    let menuOpenBtn = document.querySelector('.hamburger');
    let openMenu = document.querySelector(".nav-primary ul.menu");
    menuOpenBtn.onclick = function() {
            this.classList.toggle("active");
            navbar.classList.toggle("open");
        }
};

// <!--Throw confetti-->
function throwConfetti() { // start
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 500); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };
    // Stop
    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };
    start();
    stop();
}


// <!--Let's make scrolling easier on mobile devices by removing the 2nd row of Chattanooga images-->
// $(document).ready(function() {
//     if ($(window).width() < 991) {
//         $(".polaroid-row-2").remove();
//     }
//     $(window).resize(function() {
//         if ($(window).width() < 991) {
//             $(".polaroid-row-2").remove();
//         } else {
//             history.go(0);
//         }
//     });
// });



//   <!--Back to the top-->
// const showOnPx = 100;
// const backToTopButton = document.querySelector(".back-to-top");
// const scrollContainer = () => {
//     return document.documentElement || document.body;
// };
// const goToTop = () => {
//     document.body.scrollIntoView({ behavior: "smooth" });
// };
// document.addEventListener("scroll", () => {
//     if (scrollContainer().scrollTop > showOnPx) {
//         backToTopButton.classList.remove("hidden");
//     } else {
//         backToTopButton.classList.add("hidden");
//     }
// });
// backToTopButton.addEventListener("click", goToTop);

// <!-- Google Tag Manager -->
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-M934TRF');
// <!-- End Google Tag Manager -->