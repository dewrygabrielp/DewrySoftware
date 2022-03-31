$(document).ready(function() {

    $('.menu li:has(ul)').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('ul').slideUp();
        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('active');
            $(this).addClass('active');
            $(this).children('ul').slideDown();

        }
    });
    $('.construction').click(function() {
        swal.fire({
            title: "E-Commerce!",
            html: "<b>Currently under construction</b>"
        });
    });
    $('.btn-menu').click(function() {
        $('.container-menu .menu').slideToggle();
    });

    $(window).resize(function() {


        if ($(document).width() < 768) {

            $('.container-menu').css({ 'margin-top': '0px' });
            $('.container-menu').css({ 'margin-left': '0px' });


            $('.btn-menu').css({
                'margin-left': '50px'
            });



            $('.container-menu .menu').css({ 'margin-left': '50px' });
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('active');

        }

    });
});


document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.social', { delay: 500 });