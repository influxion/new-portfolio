export default class Scroll {
  allLinks = document.querySelectorAll('a:link');

  constructor() {
    this.allLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        this.smoothScroll(e, link);
      });
    });
  }

  smoothScroll(e, link) {
    const href = link.getAttribute('href');
    if (!href.includes('#')) {
      return;
    }
    e.preventDefault();

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  }
}
