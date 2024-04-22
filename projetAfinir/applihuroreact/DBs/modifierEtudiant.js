const { ValidationError, UniqueConstraintError } = require("sequelize")
const { Etudiant } = require("./connexion")

module.exports=   (app)   => {
   app.put('/modifieretudiant/api/:code' ,  (req,res)  =>{
       const   code=req.params.code
     Etudiant.update(req.body,{where:{code:code}})
     .then(_ => {
        Etudiant.findByPk(code).then(etude => {
            if(!etude){
                return res.status(404).json({message:"La resource non trouvé"})
            }
            return res.status(200).json({message:`L'etudiant de code ${etude.code} a ete modifié avec success!!`})
        })
     })
     .catch(error =>{
        if(error instanceof ValidationError){
           return res.status(400).json({message:error.message})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({message:'erreur de serveur'})
     })
    })
}