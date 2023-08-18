// Responsive Tab
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    })
});

// Scroll to top - w3 School
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    let mybutton = document.querySelector("#backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Scroll to top - END

// Darkmode
function toggleDarkmode() {
    let html = document.getElementsByTagName("html")[0]
    let mode = html.getAttribute("data-bs-theme")
    if (mode == "dark") {
        html.setAttribute("data-bs-theme", "white")
        document.querySelector("#switchButton i").classList = "fa-regular fa-moon"
    } else {
        html.setAttribute("data-bs-theme", "dark")
        document.querySelector("#switchButton i").classList = "fa-solid fa-sun"
    }
}
$(".counter").countUp();