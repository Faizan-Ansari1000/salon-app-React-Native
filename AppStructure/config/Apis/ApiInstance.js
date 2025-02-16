import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'https://saloon-backend-app.vercel.app',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default ApiInstance;
