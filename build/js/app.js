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

},{}]},{},[1]);
