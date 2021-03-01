import axios from 'axios';

import { handleResponse, handleError } from './response';

const BASE_URL = '';

const getProfileInfo = (resource) => {
    return axios.get()
        .then(handleResponse)
        .catch(handleError);
};

const signup = (username, email, password) => {
    return axios.post(`${BASE_URL}/signup`, {
        username,
        email,
        password
    });
};

const logout = () => {
    localStorage.removeItem('user');
};


export const apiProvider = {
    getProfileInfo,
    signup
}