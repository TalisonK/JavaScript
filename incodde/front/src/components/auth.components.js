//Required Modules
import axios from 'axios';

// Server URL
const url = "http://localhost:3030";

const authConfig = require("../config/auth.json");

/*
export const authenticated = async(props, url) => {
    const data = {
        email:props.email
    }

    const response = await axios.get(url + "/confirmed", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    console.log(response.status);
} 
*/

export const isloged = async () => {

    const response = await axios.get(url + "/home/auth", {}, {
        headers: {
            'authorization':authConfig.token,
            'Content-Type': 'application/json'
        }
    })
    console.log(response.data.validate)
    return (response.data.validate)
}
