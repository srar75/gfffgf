// src/services/AuthService.ts

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(`${API_URL}/login`, {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username: string, email: string, password: string) {
        return axios.post(`${API_URL}/register`, {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }
}

export default new AuthService();