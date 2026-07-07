import axios from "axios";


const base_URL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
  baseURL: base_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the access token to headers
// Interceptors Axios ke middleman hote hain. Ye har request 
// bhejne se pehle aur har response aane ke baad automatically run hote hain.
// Request Interceptor: Runs before an HTTP request is sent. Used to add authentication tokens, headers, logging, or modify requests.


axiosInstance.interceptors.request.use(
    function (config) {
        console.log('Request without auth header ===>', config);
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
      return config;
    },      
    function(error) {
      return Promise.reject(error);
    }
);

// Response interceptor to handle 401 errors and attempt token refresh
// Response Interceptor: Runs after a response is received. Used for centralized 
// error handling, token refresh, redirects, and response transformation.


axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest.retry) {
        // Handle 401 error, e.g., redirect to login or refresh token
        originalRequest.retry=true;
        const refreshToken = localStorage.getItem('refreshToken')
        try{
            const response = await axiosInstance.post('/token/refresh/', {refresh: refreshToken})
            localStorage.setItem('accessToken', response.data.access)
            originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
            return axiosInstance(originalRequest)
        }catch(error){
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          
        }
      }
      return Promise.reject(error);
    }
);

export default axiosInstance;