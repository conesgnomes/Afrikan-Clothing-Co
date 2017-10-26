$(function() {

  // hamburger menu animation

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.nav-mobile').toggleClass('open');
    $('.nav-mobile-dark').toggleClass('open');
    $('.mobile-nav-content').toggleClass('open');
    $('.mobile-nav-text').toggleClass('open');
    $('.nav-span').toggleClass('open');
    $('.projects-selection-highlight').toggleClass('open');
    $('.home-selection-highlight').toggleClass('open');
    $('.bio-selection-highlight').toggleClass('open');
    $('.contact-selection-highlight').toggleClass('open');
	});

});
