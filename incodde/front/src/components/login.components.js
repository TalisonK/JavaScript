

//Required services
import { login as request } from "../services/login.services";

// config
const authConfig = require("../config/auth.json");


const url = "http://localhost:3030";

export const login = async(props) => {
    try{
        const response = await request();

        const alert = document.getElementById("db");
        if(!response.data.success){
            alert.style.visibility = "visible";
        }

        if( response.data.success){
            authConfig.token = response.data.token;
            console.log(authConfig.token);
            return true;
        }
        else{
            alert.innerHTML = response.data.status;
            return false;
        }
    }
    catch(err){
        console.log(err)
    }
}