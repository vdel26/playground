(function () {

  function init () {
    particlesJS('bg', {
      particles: {
        color: '#FFF',
        color_random: false,
        shape: 'circle',
        opacity: {
          opacity: 1,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.5,
            sync: false
          }
        },
        size: 3,
        size_random: true,
        nb: 500,
        line_linked: {
          enable_auto: false,
          distance: 100,
          color: '#aaa',
          opacity: 1,
          width: 2,
          condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        },
        anim: {
          enable: true,
          speed: 3
        }
      },
      interactivity: {
        enable: true,
        mouse: {
          distance: 300
        },
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
          opacity: .5
        },
        events: {
          onresize: {
            enable: true,
            mode: 'out',
            density_auto: true,
            density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
          }
        }
      },
      retina_detect: true
    });

    // trigger fade-in effect
    document.querySelector('#overlay').classList.add('loaded');
  }

  document.addEventListener('DOMContentLoaded', init);
})();