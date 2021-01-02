$( document ).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger,.header__menu,.header__consultation').toggleClass('active');
        $('.header__menu').append( $('.header__consultation') );
    });
    $('.get__btn').click(function(){
        $('.get__form').toggleClass('active');
    });
    $('.get__close').click(function(){
        $('.get__form').removeClass('active');
    });
});