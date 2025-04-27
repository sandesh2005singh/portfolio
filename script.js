// DOM Elements
const progressBar = document.getElementById('progress-bar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('back-to-top');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const sections = document.querySelectorAll('section');

// Helper function to check if element is in viewport
function isInViewport(el, offset = 0) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight * (0.8 - offset) &&
    rect.bottom >= 0
  );
}

// Initialize all animations
function initAnimations() {
  // Animate sketch lines
  const animateSketchLines = () => {
    const sketchLines = document.querySelectorAll('.sketch-line');
    sketchLines.forEach(line => {
      if (isInViewport(line)) {
        line.classList.add('animate');
      }
    });
  };

  // Animate elements with fade-in-up class
  const animateFadeInUp = () => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Animate elements with slide-in-left class
  const animateSlideInLeft = () => {
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    slideLeftElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Animate elements with slide-in-right class
  const animateSlideInRight = () => {
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    slideRightElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Animate elements with zoom-in class
  const animateZoomIn = () => {
    const zoomElements = document.querySelectorAll('.zoom-in');
    zoomElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Animate elements with bounce-in class
  const animateBounceIn = () => {
    const bounceElements = document.querySelectorAll('.bounce-in');
    bounceElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Animate staggered elements
  const animateStaggered = () => {
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
      if (isInViewport(container)) {
        const staggerItems = container.querySelectorAll('.stagger-item');
        staggerItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animated');
          }, 150 * index);
        });
      }
    });
  };

  // Animate draw animation
  const animateDrawing = () => {
    const drawAnimations = document.querySelectorAll('.draw-animation');
    drawAnimations.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Animate rotation animation
  const animateRotation = () => {
    const rotateAnimations = document.querySelectorAll('.rotate-animation');
    rotateAnimations.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Run all animations on scroll
  const handleScroll = () => {
    animateSketchLines();
    animateFadeInUp();
    animateSlideInLeft();
    animateSlideInRight();
    animateZoomIn();
    animateBounceIn();
    animateStaggered();
    animateDrawing();
    animateRotation();
    updateProgressBar();
    updateBackToTop();
    updateActiveNavLink();
  };

  // Initial animation check
  handleScroll();

  // Add scroll listener
  window.addEventListener('scroll', handleScroll);
}

// Progress Bar
function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
}

// Back to Top Button
function updateBackToTop() {
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

// Scroll to top when Back to Top button is clicked
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 200)) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Music Toggle
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicToggle.classList.remove('active');
  } else {
    bgMusic.play();
    musicToggle.classList.add('active');
  }
  
  isMusicPlaying = !isMusicPlaying;
});

// Contact Form Submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // In a real application, you would send this data to a server
    // For now, let's just simulate a successful submission
    setTimeout(() => {
      // Clear form
      contactForm.reset();
      
      // Show success message
      formSuccess.classList.remove('hide');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        formSuccess.classList.add('hide');
      }, 3000);
    }, 1000);
  });
}

// Scroll Indicator
function createScrollIndicator() {
  const scrollIndicator = document.getElementById('scroll-indicator');
  
  if (!scrollIndicator) return;
  
  // Clear existing dots
  scrollIndicator.innerHTML = '';
  
  // Create dot for each section
  sections.forEach((section, index) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator-dot');
    dot.dataset.index = index;
    dot.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });
    });
    scrollIndicator.appendChild(dot);
  });
  
  // Update active dot on scroll
  window.addEventListener('scroll', () => {
    const dots = scrollIndicator.querySelectorAll('.indicator-dot');
    
    sections.forEach((section, index) => {
      const dot = dots[index];
      if (isInViewport(section, 0.3)) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  createScrollIndicator();
  
  // Trigger initial scroll to get everything set up
  window.dispatchEvent(new Event('scroll'));
});