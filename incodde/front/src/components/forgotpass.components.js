import axios from 'axios';

const url = "http://localhost:3030";

const email = "";

export const resetpassword = async () => {
    email = document.getElementById("emailinput").value;
    let data = {
        email:email,
        message:"Resend Confirmation"
    }
    const response = await axios.post(url + "/home/emailvalidate", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const validating = async() => {
    const token = document.getElementById("validateinput").value;
    let data = {
        email:email,
        token:token
    }

    const response = await axios.post(url + "/validation", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}