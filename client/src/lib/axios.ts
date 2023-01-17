import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    }
})