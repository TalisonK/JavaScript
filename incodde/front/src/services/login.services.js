import axios from 'axios';
import validator from 'validator';


const url = "http://localhost:3030"

//auxiliar method

const authenticate = (email, password) => {
	// console.log(validator.isEmail(email))
	// console.log(validator.isAlphanumeric(password))
	// console.log(password.length >= 6 );
    return validator.isEmail(email) && validator.isAlphanumeric(password) && password.length >= 6;
}

export const login = async() => {
	try{
		const email = document.getElementById("emailinput").value;
		const password = document.getElementById("passwordinput").value;
		console.log(email);
		if(authenticate(email, password)){
			let data = {
				email:email,
				password:password
			}			
			const response = await axios.post(url + "/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
			})
			return response; 
		}
	}
	catch(err) {
		console.log("Erro ao requisitar o login");
	}
}