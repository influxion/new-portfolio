import Stack from './views/stackView.js';
import Modal from './views/modalView.js';
import Navigation from './views/navView.js';
import Scroll from './views/scrollView.js';

import * as model from './model.js';

const yearEl = document.querySelector('.year');

const sendEmailHandler = async (data) => {
  try {
    Modal.renderStatus('Sending message...');

    const res = await model.sendEmail(data);

    if (res.status === 200) {
      Modal.renderStatus('Message sent!');
    } else if (res.status === 400) {
      Modal.renderStatus('Validation failed.');
    } else {
      Modal.renderStatus('Fatal error. Contact directly.');
    }

    setTimeout(() => {
      Modal.renderStatus('Send Message →');
    }, 5000);
  } catch (error) {
    return;
  }
};

const init = () => {
  Modal.submitHandler(sendEmailHandler);

  new Stack();
  new Navigation();
  new Scroll();

  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};
init();
