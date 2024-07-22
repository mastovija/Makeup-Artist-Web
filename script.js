//SCROLL----------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navMenu a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});
//----------------------------------------------------------------------------------------------------------------------------------

//ESTRELLITAS-----------------------------------------------------------------------------------------------------------------------

// Particles.js configuration
const particlesConfig = {
    "particles": {
        "number": {
          "value": 500,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "star",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
};

// Initialize Particles.js for each border
particlesJS("particles-left", particlesConfig);
particlesJS("particles-right", particlesConfig);
particlesJS("particles-top", particlesConfig);
particlesJS("particles-bottom", particlesConfig);

//----------------------------------------------------------------------------------------------------------------------------

//GALERIA FOTOS---------------------------------------------------------------------------------------------------------------

var quadimages = document.querySelectorAll("#quad figure");
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  var captionText = document.getElementById("caption");
  var closeBtn = document.querySelector(".close");
  var leftArrow = document.querySelector(".left-arrow");
  var rightArrow = document.querySelector(".right-arrow");
  var currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modal.classList.add('show'); // Add show class for animation
    modalImg.src = quadimages[currentIndex].querySelector("img").src;
    captionText.innerHTML = quadimages[currentIndex].querySelector("figcaption").innerHTML;
    modalImg.style.animation = "fadeInZoom 0.5s ease"; // Trigger combined animation
  }

  function closeModal() {
    modal.classList.remove('show');
    setTimeout(function() {
      modal.style.display = "none";
    }, 500); // Delay to match transition duration
  }

  function showPrevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : quadimages.length - 1;
    updateModalImage();
  }

  function showNextImage() {
    currentIndex = (currentIndex < quadimages.length - 1) ? currentIndex + 1 : 0;
    updateModalImage();
  }

  function updateModalImage() {
    modalImg.src = quadimages[currentIndex].querySelector("img").src;
    captionText.innerHTML = quadimages[currentIndex].querySelector("figcaption").innerHTML;
    modalImg.style.animation = "fadeInZoom 0.5s ease"; // Trigger combined animation
  }

  for (let i = 0; i < quadimages.length; i++) {
    quadimages[i].addEventListener('click', function() {
      openModal(i);
    });
  }

  closeBtn.addEventListener('click', closeModal);
  leftArrow.addEventListener('click', showPrevImage);
  rightArrow.addEventListener('click', showNextImage);


//----------------------------------------------------------------------------------------------------------------------------