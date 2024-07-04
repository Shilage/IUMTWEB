import axios from 'axios';
const BASE_URL = 'http://localhost:3001/users';

/**
 * Sends user data to the server for the registration
 *
 * @param {object} data - contains the user data used for the registration
 * @returns {Promise<object>} promise that result in an object containing the response from the server for the registration request
 */
export const sendUserData = (data) => {
  return axios.post(`${BASE_URL}/sign-up`, data);
};
