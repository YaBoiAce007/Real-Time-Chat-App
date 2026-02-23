import axios from 'axios';

const Api = axios.create(
    {
        baseURL: import.meta.env.VITE_API_BASE_URL,
    }
);

Api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token');
        console.log("Interceptor running, token:", token)
        if(token){
            config.headers['authorization'] = token;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

export default Api;