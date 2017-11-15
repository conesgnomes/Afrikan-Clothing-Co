(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

$(document).ready(function() {
  if ($("#mumu-parallax-window").length) {
    parallaxMumu();
  }
});

$(window).scroll(function(e) {
  if ($("#mumu-parallax-window").length) {
    parallaxMumu();
  }
});

function parallaxMumu(){
  if( $("#mumu-parallax-window").length > 0 ) {
    var plxBackground = $("#mumu-parallax-background");
    var plxWindow = $("#mumu-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top+100;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top-200;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', ((plxWindowTopToWindowTop) * plxSpeed) + 'px');
  }
}

$(document).ready(function() {
  if ($("#jacket-parallax-window").length) {
    parallaxJacket();
  }
});

$(window).scroll(function(e) {
  if ($("#jacket-parallax-window").length) {
    parallaxJacket();
  }
});

function parallaxJacket(){
  if( $("#jacket-parallax-window").length > 0 ) {
    var plxBackground = $("#jacket-parallax-background");
    var plxWindow = $("#jacket-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top-450;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top-200;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', ((plxWindowTopToWindowTop) * plxSpeed) + 'px');
  }
}

$(document).ready(function() {
  if ($("#pants-parallax-window").length) {
    parallaxPants();
  }
});

$(window).scroll(function(e) {
  if ($("#pants-parallax-window").length) {
    parallaxPants();
  }
});

function parallaxPants(){
  if( $("#pants-parallax-window").length > 0 ) {
    var plxBackground = $("#pants-parallax-background");
    var plxWindow = $("#pants-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top+100;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top-200;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', ((plxWindowTopToWindowTop) * plxSpeed) + 'px');
  }
}

$(document).ready(function() {
  if ($("#romper-parallax-window").length) {
    parallaxRomper();
  }
});

$(window).scroll(function(e) {
  if ($("#romper-parallax-window").length) {
    parallaxRomper();
  }
});

function parallaxRomper(){
  if( $("#romper-parallax-window").length > 0 ) {
    var plxBackground = $("#romper-parallax-background");
    var plxWindow = $("#romper-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top-250;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top-200;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', ((plxWindowTopToWindowTop) * plxSpeed) + 'px');
  }
}

},{}]},{},[1]);
