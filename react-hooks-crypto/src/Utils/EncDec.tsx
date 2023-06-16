import CryptoJS from 'crypto-js'

export const encrypt = (plainText : string) : string =>{
    const ciphertext = CryptoJS.AES.encrypt(plainText, 'key123').toString();
    return ciphertext
} 

export const decrypt = (chipherText : string) : string =>{
    var bytes  = CryptoJS.AES.decrypt(chipherText, 'key123');
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData
}