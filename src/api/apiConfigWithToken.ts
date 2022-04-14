import axios from 'axios';


const token = localStorage.getItem('token') || ''


const apiConfigWithToken = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'x-token':token
    }
})


export default apiConfigWithToken