import axios from 'axios';
import validator from 'validator';


const url = "http://localhost:3030";

//auxiliar method
const authenticate = (email, password) => {
    return validator.isEmail(email) && validator.isAlphanumeric(password) && password.length >= 6;
}

async function registrator(){
	try{
		const email = document.getElementById("emailinput").value;
        const password = document.getElementById("passwordinput").value;
        let err = authenticate(email, password );
		if(err){
			let data = {
				email:email,
				password:password
			}
			
			const response = await axios.post(url + "/register", data, {
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

export default registrator;