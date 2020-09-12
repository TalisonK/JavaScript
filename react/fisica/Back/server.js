const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routerApi = require('./routers/api')
const routerLogin = require('./routers/login')


const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', routerApi)
app.use('/', routerLogin)

app.listen(process.env.PORT || 3030, () => console.log("Escutando na porta 3030"));
