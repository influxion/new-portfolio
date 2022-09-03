import { TIMEOUT_SECONDS } from '../config.js';

const timeout = function (s) {
  return new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second(s)`));
    }, s * 1000)
  );
};

export const AJAX = async (url, body = undefined) => {
  try {
    const fetchPro = body
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: '*/*',
          },
          body: new URLSearchParams(body),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);

    return res;
  } catch (error) {
    return;
  }
};
