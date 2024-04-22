const moduleEtudiant=require('./Etudiant')
const { Sequelize, DataTypes } = require("sequelize");
const moduleUser=require('./user')
const connexionDB= new Sequelize('projetreact', 'root','',{host:'localhost',dialect:'mariadb',dialectOptions:{
    'timezone':'Etc/GMT-2'
},
'logging':false
})
console.log(moduleEtudiant)
console.log(moduleUser)
const User=moduleUser(connexionDB,DataTypes)
const Etudiant=moduleEtudiant(connexionDB,DataTypes)
console.log(Etudiant)
const syncronise=()=>{connexionDB.sync().then(_=>console.log("syncroniser "))}
module.exports={
    syncronise, Etudiant , User     
}