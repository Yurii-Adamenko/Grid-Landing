$(document).ready(function(){

    $('.header-navbar-menu__button').click(function() {
      $(this).toggleClass('open');
      $('.header-navbar-menu__list').toggle(800);
    });
    
});