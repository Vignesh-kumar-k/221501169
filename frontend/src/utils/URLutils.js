// src/utils/urlUtils.js

import { v4 as uuidv4 } from 'uuid';

/**
 * Check if a URL is valid
 */
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

/**
 * Generate a short unique code (6 characters)
 */
export const generateShortCode = () => {
  return uuidv4().slice(0, 6);
};

/**
 * Check if a custom shortcode is valid
 * - Alphanumeric
 * - Length: 4 to 10 characters
 */
export const isValidShortcode = (code) => /^[a-zA-Z0-9]{4,10}$/.test(code);
