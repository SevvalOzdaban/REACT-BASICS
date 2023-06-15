import axios from "axios";

const baseUrl = "https://dummyjson.com/"


export const client = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    headers: {token: ""}
})