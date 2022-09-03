class Modal {
  formBtn = document.querySelector('.form-btn');
  formName = document.querySelector('.form-name');
  formEmail = document.querySelector('.form-email');
  formMessage = document.querySelector('.form-message');
  form = document.querySelector('.modal__form');

  body = document.querySelector('body');
  overlay = document.querySelector('.overlay');
  modal = document.querySelector('.modal');
  btnCloseModal = document.querySelector('.btn--close-modal');
  btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  constructor() {
    this.btnsOpenModal.forEach((modal) =>
      modal.addEventListener('click', this._openModal.bind(this))
    );

    this.btnCloseModal.addEventListener('click', this._closeModal.bind(this));
    this.overlay.addEventListener('click', this._closeModal.bind(this));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this._closeModal();
      }
    });
  }

  _openModal(e) {
    e.preventDefault();
    this.body.style.overflow = 'hidden';
    this.modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }

  _closeModal() {
    this.body.style.overflow = '';
    this.modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  _clearForm() {
    this.formName.value = this.formEmail.value = this.formMessage.value = '';
  }

  renderStatus(text) {
    this.formBtn.textContent = text;
  }

  submitHandler(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dataArr = [...new FormData(document.querySelector('.modal__form'))];

      this._clearForm();

      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }
}

export default new Modal();
