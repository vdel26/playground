'use strict';

(function (){

  var Slack = {

    initialize: function () {
      var self = this;

      /* button */
      this.button = document.querySelector('#animate-me');

      /* logo parts */
      this.blue = document.querySelector('.blue');
      this.pink = document.querySelector('.pink');
      this.green = document.querySelector('.green');
      this.yellow = document.querySelector('.yellow');

      /* sequences */
      this.blueSequence = [
        { elements: self.blue, properties: { width: 15 }, options: { duration: 500 } },
        { elements: self.blue, properties: { translateX: 75 }, options: { duration: 500 } },
        { elements: self.blue, properties: { right: 0, translateX: 0 }, options: { duration: 0 } },
        { elements: self.blue, properties: { width: 90 }, options: { duration: 500, complete: self.repeat.bind(self.blue) } }
      ];
      this.pinkSequence = [
        { elements: self.pink, properties: { right: 0 }, options: { duration: 0 } },
        { elements: self.pink, properties: { width: 15 }, options: { duration: 500 } },
        { elements: self.pink, properties: { translateX: -75 }, options: { duration: 500 } },
        { elements: self.pink, properties: { left: 0, translateX: 0 }, options: { duration: 0 } },
        { elements: self.pink, properties: { width: 90 }, options: { duration: 500, complete: self.repeat.bind(self.pink) } }
      ];

      this.yellowSequence = [
        { elements: self.yellow, properties: { rotateZ: 90, translateX: -15, translateY: 15, top: 0  }, options: { duration: 0 } },
        { elements: self.yellow, properties: { width: 15 }, options: { duration: 500 } },
        { elements: self.yellow, properties: { translateX: 60 }, options: { duration: 500 } },
        { elements: self.yellow, properties: { bottom: 0, translateX: -75, translateY: 0, rotateZ: -90 }, options: { duration: 0 } },
        { elements: self.yellow, properties: { width: 90 }, options: { duration: 500, complete: self.repeat.bind(self.yellow) } }
      ];

      this.greenSequence = [
        { elements: self.green, properties: { rotateZ: -90, translateX: -15, translateY: -15, bottom: 0  }, options: { duration: 0 } },
        { elements: self.green, properties: { width: 15 }, options: { duration: 500 } },
        { elements: self.green, properties: { translateX: 60 }, options: { duration: 500 } },
        { elements: self.green, properties: { top: 0, translateX: 0, translateY: 0, rotateZ: 90 }, options: { duration: 0 } },
        { elements: self.green, properties: { width: 90 }, options: { duration: 500, complete: self.repeat.bind(self.green)} }
      ];

      this.button.addEventListener('click', function () { self.animate(); });

      window.yellowSequence = this.yellowSequence;

      /* kickoff animation */
      this.animate();
    },

    animate: function () {
      if (document.querySelector('.velocity-animating')) return;
      Velocity.RunSequence(this.blueSequence);
      Velocity.RunSequence(this.pinkSequence);
      Velocity.RunSequence(this.yellowSequence);
      Velocity.RunSequence(this.greenSequence);
    },

    repeat: function (elem) {
      this.style.cssText = "";
      // var self = this;
      // self[elem].style.cssText = "";
      // requestAnimationFrame(function () {
      //   Velocity.RunSequence(self[elem + 'Sequence']);
      // });
    }

  };

  document.addEventListener('DOMContentLoaded', function () {
    return Slack.initialize();
  });
})();
