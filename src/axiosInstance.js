import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: 'http://93.127.163.248/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})
// Funcion para obtener el CSRF de las cookies
function getCSRFToken() {
    const csrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return csrfToken;
  }

axiosInstance.interceptors.request.use(
    (config) => {
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