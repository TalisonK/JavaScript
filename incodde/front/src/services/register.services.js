import axios from 'axios';
import validator from 'validator';


const url = "http://localhost:3030";

//auxiliar method
const authenticate = (props) => {
    return validator.isEmail(props.email) && validator.isAlphanumeric(props.password) && props.password.length >= 6;
}

async function register(){
	try{
		const email = document.getElementById("emailinput").value;
        const password = document.getElementById("passwordinput").value;
        let err = authenticate({ email:email, password:password });
		if(err){
			let data = {
				email:email,
				password:password
			}
			console.log(email)
			console.log(password)
			
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

export default register;