const express= require('express')
const app=express()
const morgan=require("morgan")
const bodyParser=require('body-parser')
const { syncronise } = require('./DBs/connexion')
const session=require('express-session');
const cookieParser=require('cookie-parser');

require('dotenv').config()
const cors = require('cors');

app.use(bodyParser.json() )
app.use(cors({
    origin:'http://localhost:3000' ,
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
}))


app.use(morgan('dev'))

const port=3001
console.log(process.env.ACCESSTOKEN, process.env.REFREHTOKEN)
syncronise()
require("./DBs/creerEtudiant")(app)
require('./DBs/listerEtudes')(app)
require("./DBs/suprimerEtudiant")(app)
require('./DBs/inscription')(app)
require('./DBs/listerUserConnect')(app)
require('./DBs/recupererUn')(app);
require('./DBs/login')(app);
require('./DBs/modifierEtudiant')(app)

app.listen(port , () =>{console.log(`Demarrer sur le serveur http://localhost:${port}`)})