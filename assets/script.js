$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('nav a, footer a').click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Toggle navigation on hamburger menu click
    $('.hamburger').click(function () {
        $('nav ul').toggleClass('show');
        $(this).find('.material-icons').text(
            $('nav ul').hasClass('show') ? 'close' : 'menu'
        );
    });
});
