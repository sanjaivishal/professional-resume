const navLinks = document.querySelectorAll('.site-header nav a');
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.removeAttribute('aria-current'));
      const active = document.querySelector(`.site-header nav a[href="#${entry.target.id}"]`);
      if (active) active.setAttribute('aria-current', 'page');
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
