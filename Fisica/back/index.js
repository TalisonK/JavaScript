// Required Modules
    const express = require('express');
    const bodyparser = require('body-parser');
    const mongoose = require('mongoose');
    const cors = require('cors')
    const morgan = require('morgan')
    const App = express();


//Modules configuration
    //Body-Parser    
        App.use(bodyparser.urlencoded({extended: true}));
        App.use(bodyparser.json());

    //Mongoose
        require('dotenv/config');
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.DB_CONNECTION_QUESTOES, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=> {console.log("Conectado ao DB!")})
        .catch((err) => {console.log("Erro ao conectar ao DB:"+err)});

    //Client permissions
        App.use(cors());
        App.use(morgan("dev"));


//Routes

    const rquestions = require('./routes/questions');
    const rlogin = require('./routes/login');

    App.use("/quest", rquestions);
    App.use("/auth", rlogin);

//Others
    const PORT = process.env.PORT || 3030;
    App.listen(PORT, ()  => {console.log("servidor ativo na porta: "+ PORT)})
