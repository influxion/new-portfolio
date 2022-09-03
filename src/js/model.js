import { API_URL } from './config.js';
import { AJAX } from './helpers/ajax.js';

export const sendEmail = (body) => {
  return AJAX(`${API_URL}/send-email`, body);
};
