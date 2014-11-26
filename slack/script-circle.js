/* global Velocity */

'use strict';

(function () {
  var App = {
    initialize: function () {
      this.chip = document.querySelector('.chip');
      this.body = document.querySelector('body');
      this.enableBindings();
      this.chip.style.left = '500px';
      this.chip.style.top = '200px';
    },
    enableBindings: function () {
      this.body.addEventListener('click', this.transitionToVertical.bind(this));
    },
    transitionToVertical: function () {
      var step = (2 * Math.PI) / 200,
          angle = 0,
          i = 0,
          self = this;

      function update() {
        i++;
        var xPosition = 100 * Math.cos(angle);
        var yPosition = 100 * Math.sin(angle);

        self.chip.style.transform = 'translate3d(' + xPosition + 'px, ' + yPosition + 'px, 0)';
        angle += step

        if (i <= 200) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

  };

  document.addEventListener('DOMContentLoaded', function () {
    return App.initialize();
  });

})();

