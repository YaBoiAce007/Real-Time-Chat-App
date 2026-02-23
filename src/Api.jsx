import axios from 'axios';

const Api = axios.create(
    {
        baseURL: "https://real-time-chat-app-backend-production.up.railway.app/real-time-chat-app",
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