$(function () {

    'use strict';
    $('.links li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');
    
    });


});