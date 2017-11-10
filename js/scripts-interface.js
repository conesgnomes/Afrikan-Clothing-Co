$(function() {

  // hamburger menu animation

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.nav-mobile').toggleClass('open');
    $('.nav-mobile-dark').toggleClass('open');
    $('.mobile-nav-content').toggleClass('open');
    $('.mobile-nav-text').toggleClass('open');
    $('.nav-span').toggleClass('open');
    $('.home-selection-highlight').toggleClass('open');
    $('.about-selection-highlight').toggleClass('open');
    $('.products-selection-highlight').toggleClass('open');
    $('.kenya-selection-highlight').toggleClass('open');
    $('.blog-selection-highlight').toggleClass('open');
	});

});
