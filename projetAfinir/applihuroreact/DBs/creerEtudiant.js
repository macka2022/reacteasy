//const verifyToken=require('./verifyTokens')
const {ValidatorError,UniqueConstraintError}=require('sequelize')
const { Etudiant } = require('./connexion')
module.exports=(app)=>{
    console.log(Etudiant)
    app.post('/ajouteretudiant/api', (req,res)=>{
       
        Etudiant.create(req.body)
        .then(etudiant=>{res.status(200).json({etudiant,message:`L'etudiant ${etudiant.nom} ${etudiant.prenom} a été ajouté avec succes`})})
        .catch(error=>{
            if (error instanceof ValidatorError) {
                return res.status(400).json({message:error.message})
            }
            if (error instanceof UniqueConstraintError) {
                return res.status(400).json({message:error.message})
            }
            res.status(500).json({message:"Reessayer plutard  svp!!!!!!"})
    })
})}
   
    