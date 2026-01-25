// scroll-animations.js
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

// Navbar collapse on link click
 document.querySelectorAll('.custom-navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('#customNavbarNav');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });

// About Us Scroll reveal effect for elements 
 document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    function reveal() {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("visible");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Call on load
  });

//   Work Page Scroll reveal effect for elements
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    function reveal() {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
          reveals[i].classList.add("visible");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Call on load
  });

//   Services Page Scroll reveal effect for elements
 document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    function reveal() {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
          reveals[i].classList.add("visible");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal();
  });

//   Expertise Page Scroll reveal effect for elements
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    function reveal() {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
          reveals[i].classList.add("visible");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal();
  });