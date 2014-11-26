'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var input = document.querySelector('.input-wrapper > input');
  var label = document.querySelector('.input-label');

  input.addEventListener('focus', function () {
    input.parentNode.classList.add('is-focused');
  });

  input.addEventListener('blur', function () {
    input.parentNode.classList.remove('is-focused');
  });

  input.addEventListener('keyup', function () {
    if (!input.validity.valid) input.parentNode.classList.add('is-invalid');
    else input.parentNode.classList.remove('is-invalid');

    if (input.value !== '') label.classList.add('is-minimized');
    else label.classList.remove('is-minimized');
  });
});