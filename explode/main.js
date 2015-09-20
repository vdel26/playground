(function () {
  var svgNS = 'http://www.w3.org/2000/svg';

  var maxX = window.innerWidth;
  var maxY = window.innerHeight;
  var maxSquares = 10;
  var gutter = 5;
  var length = 20;
  var side = maxSquares*length + (maxSquares - 1)*gutter;

  function transformOrigin (x, y) {
    /* firefox svg transform origin bug */
    return '-webkit-transform-origin: ' + x + 'px ' + y + 'px; ' +
           'transform-origin: ' + x + 'px ' + y + 'px;';
  }

  function create (el) {
    return document.createElementNS(svgNS, el);
  }

  function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function explode (elements) {
    elements.forEach(function (elem) {
      animate({
        el: elem.el,
        translateX: [elem.translateX, randomInt(-maxX, maxX*2)],
        translateY: [elem.translateY, randomInt(-maxY, maxY*2)],
        fill: ['#80f', '#39E1CF'],
        scale: [1, 0],
        duration: 2000,
        easing: 'easeOutCirc',
        delay: randomInt(0, 300),
      })
    });
  }

  function rotate (elem) {
    animate({
      el: elem,
      rotate: [0, 360],
      fill: ['#fc0', '#80f'],
      duration: 2000,
      complete: function () {
        explode(squares);
      }
    });
  }

  function paint (elements) {
    elements.forEach(function (elem, idx) {
      animate({
        el: elem.el,
        fill: ['#fc0', '#80f'],
        easing: 'easeOutCubic',
        duration: 2000
      })
    });
  }

  var svg = create('svg');
  var g = create('g');
  g.setAttribute('style', transformOrigin(maxX/2, maxY/2));
  svg.setAttribute('version', 1.1);
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('width', maxX);
  svg.setAttribute('height', maxY);

  var squares = [];
  for (var i = 0; i < maxSquares; i++) {
    for (var j = 0; j < maxSquares; j++) {
      var path = create('path');
      var d = 'M 0,0 h 20 v 20 h -20 Z';
      path.setAttribute('d', d);
      path.setAttribute('fill', '#fc0');
      path.setAttribute('style', transformOrigin(length/2, length/2));
      var params = {
        el: path,
        translateX: [(25*i + (maxX - side)/2), (25*i + (maxX - side)/2)],
        translateY: [(25*j + (maxY - side)/2), (25*j + (maxY - side)/2)],
        scale: [0, 1],
        delay: 30*(i + (maxSquares + 1)*j),
        easing: 'easeOutElastic 400'
      };
      if (i === (maxSquares - 1) && j === (maxSquares - 1)) {
        params.complete = function () {
          paint(squares);
          rotate(g);
        };
      }
      squares.push(params);
      g.appendChild(path);
    }
  }

  svg.appendChild(g);
  document.body.appendChild(svg);
  squares.forEach(animate);
})();
