import axios from 'axios';

const Api = axios.create(
    {
        baseURL: "http://localhost:8081/real-time-chat-app",
    }
)

export default Api;