const {Etudiant }= require("./connexion")
 const verifyTokens = require("./verifyTokens")
module.exports=(app)=>{
    app.get('/listeretudiant/api',verifyTokens, (req, res)=>{
       
        Etudiant.findAll()
        .then(etudiants=>{
                res.status(200).json({message:`La listes des etudiants qui sont au nombre de (${etudiants.length})`,etudiants,loggin:true})
             })
       .catch(_=>{res.status(500).json({message:"Reessayer plus tard svp !!!!!!!!!"})})
}) 
}