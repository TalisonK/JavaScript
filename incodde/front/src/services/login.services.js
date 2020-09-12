import axios from 'axios';
import validator from 'validator';


const url = "http://localhost:3030"

//auxiliar method
const authenticate = (props) => {
    return validator.isEmail(props.email) && validator.isAlphanumeric(props.password) && props.password.leght >= 6;
}

async function login(){
	try{
		const email = document.getElementById("emailinput").value;
		const password = document.getElementById("passwordinput").value;
		if(authenticate({ email:email, password:password })){
			let data = {
				email:email,
				password:password
			}			
			const response = await axios.post(url + "/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
		}
	}
	catch(err) {
		console.log("Erro no login: " + err);
	}
}


export default login;