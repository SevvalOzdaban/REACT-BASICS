import { client } from "../configs/Api";
import { Jwt } from "../models/Jwt";
import { Products } from "../models/Products";

export const login = (jwt: Jwt) => {
    //<Jwt> sayesinde servisten dönen response'un tipini garantilemiş oluruz.
    //jwt data ise requestte gönderdiğimiz datadır ve modelden oluşan tipleri kullanır.
    return client.post<Jwt>("auth/login",jwt)
}  

export const allProduct = () => {
    return client.get<Products>("products")
}