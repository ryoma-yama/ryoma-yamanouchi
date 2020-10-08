'use strict';

$(function () {
  // 各ページへ遷移したときのアニメーション
  $('main').hide().fadeIn(300);

  // ハンバーガーメニュー, トグルボタン
  $('.header-hamburger__btn').on('click', function () {
    $(this).toggleClass('is-active');
    $('.header-hamburger__menu').toggleClass('is-open');
  });

  // ハンバーガーメニュー, トグルメニュー
  $('.header-hamburger__menu').on('click', function () {
    $(this).toggleClass('is-open');
    $('.header-hamburger__btn').toggleClass('is-active');
  });

});