import axios from "axios";

export const api = axios.create({
    baseURL: "http://172.16.28.79:8080",
    timeout: 5000,
});