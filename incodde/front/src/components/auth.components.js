import axios from 'axios';

export default async function authenticated(props, url) {
    const data = {
        email:props.email
    }

    const response = await axios.get(url + "/confirmed", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
} 