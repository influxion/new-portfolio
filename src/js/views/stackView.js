export default class Stack {
  state;
  clicked = false;
  overlays = document.querySelectorAll('.overlays');
  rockStack = document.querySelector('.rock-stack');
  imgSrc = 'assets/rock-stack.v2.png';

  titleLayer = document.querySelector('.title');
  prevLayer;

  constructor() {
    this.overlays.forEach((el) => {
      el.addEventListener('click', (e) => {
        this.clickHandler(e, el.dataset.src);
      });
      el.addEventListener('mouseover', (e) => {
        this.mouseOverHandler(e, el.dataset.src);
      });
      el.addEventListener('mouseout', () => {
        this.mouseOutHandler();
      });
    });
  }

  clickHandler(e, src) {
    if (this.state === e.target && this.clicked) {
      this.rockStack.src = this.imgSrc;
      this.state = '';
      this.clicked = false;
    } else {
      this.rockStack.src = src;
      this.state = e.target;
      this.clicked = true;
    }
    this.renderView();
  }

  mouseOverHandler(e, src) {
    if (!this.clicked) {
      this.rockStack.src = src;
      this.state = e.target;
    }
    this.renderView();
  }

  mouseOutHandler() {
    if (!this.clicked) {
      this.rockStack.src = this.imgSrc;
      this.state = '';
    }
    this.renderView();
  }

  renderView() {
    if (!this.state && this.prevLayer) {
      this.prevLayer.classList.add('hidden');
      this.titleLayer.classList.remove('hidden');
      return;
    }

    const layer = this.state.dataset.layer;
    const layerEl = document.querySelector(`.${layer}`);

    layerEl.classList.remove('hidden');
    this.titleLayer.classList.add('hidden');

    if (this.prevLayer !== layerEl && this.prevLayer) {
      this.prevLayer.classList.add('hidden');
    }
    this.prevLayer = layerEl;
  }
}
