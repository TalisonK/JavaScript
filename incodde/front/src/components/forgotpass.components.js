import axios from 'axios';

const url = "http://localhost:3030";

export default async function resetpassword(){
    const email = document.getElementById("emailinput").value;
    let data = {
        email:email,
        message:"ResetPassword"
    }
    
    const response = await axios.post(url + "/emailvalidate", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(response.status);
}