import axios from "axios";

 const apiConfig = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
})


export default apiConfig

   
