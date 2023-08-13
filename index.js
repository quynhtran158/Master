// $(document).ready(function () {
//     $('#horizontalTab').easyResponsiveTabs({

//         // Types: default, vertical, accordion   
//         type: 'default',

//         //auto or any width like 600px
//         width: 'auto',

//         // 100% fit in a container
//         fit: true,

//         // Close the panels on start, 
//         // the options 'accordion' and 'tabs' keep them closed in there respective view types
//         closed: false,

//         // The tab groups identifier
//         tabidentify: '',

//         // background color for active tabs in this group
//         activetab_bg: 'white',

//         // background color for inactive tabs in this group
//         inactive_bg: '#F5F5F5',

//         // border color for active tabs heads in this group
//         active_border_color: '#c1c1c1',

//         // border color for active tabs contect in this group 
//         // so that it matches the tab head border
//         active_content_border_color: '#c1c1c1',

//         activate: function () { }

//     });

// });


$(document).ready(function () {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// Today res tab
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

// Darkmode
function toggleDarkmode() {
    let html = document.getElementsByTagName("html")[0]
    let mode = html.getAttribute("data-bs-theme")
    html.setAttribute("data-bs-theme", mode == "dark" ? "white" : "dark")
}