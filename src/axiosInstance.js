import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

function getCSRFToken() {
    const csrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return csrfToken;
  }

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; 
        }

        const csrfToken = getCSRFToken();
        if (csrfToken) {
          config.headers['X-CSRFToken'] = csrfToken;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;