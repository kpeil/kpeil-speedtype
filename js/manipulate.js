'use strict';

module.exports = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('div#hellodiv').innerHTML = 'Hello World';
  });
};
