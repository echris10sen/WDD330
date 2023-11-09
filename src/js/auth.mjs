import { loginRequest } from "./externalServices.mjs";

export function login(creds, redirect){
    loginRequest(creds)
}

function isTokenValid(){
    let valid = false;
    // if(expired == false){
    //     valid = true
    // }
    return valid
}
function checkLogin(){

}