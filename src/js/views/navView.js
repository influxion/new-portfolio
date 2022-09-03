export default class Navigation {
  menuToggle = document.querySelector('#side-menu-toggle');
  sideDrawer = document.querySelector('.mobile-nav');
  backdrop = document.querySelector('.backdrop');
  sectionHeroEl = document.querySelector('.hero');

  constructor() {
    this.backdrop.addEventListener('click', this.backdropClickHandler);
    this.menuToggle.addEventListener('click', this.menuToggleClickHandler);
    const obs = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];

        if (!entry.isIntersecting) document.body.classList.add('sticky');
        else document.body.classList.remove('sticky');
      },
      {
        // In the viewport
        root: null,
        rootMargin: '-80px',
        threshold: 0,
      }
    );
    obs.observe(this.sectionHeroEl);
  }

  backdropClickHandler() {
    this.backdrop.style.display = 'none';
    this.sideDrawer.classList.remove('open');
  }

  menuToggleClickHandler() {
    this.backdrop.style.display = 'block';
    this.sideDrawer.classList.add('open');
  }
}
