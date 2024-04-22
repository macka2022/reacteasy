
const { Etudiant } = require("./connexion")

module.exports=(app)   =>   {
    app.delete('/suprimeretude/api/:code', (req,res)   => {
       const  code=req.params.code
        Etudiant.findByPk(code).then(etudiants =>  {
            if(!etudiants){
                return res.status(404).json({message:"La ressource non trouvée !!!"})
            }
            const EtudiantSup=etudiants
            return Etudiant.destroy({where:{code:etudiants.code}}).then(
                res.status(200).json({message:`Létudiant ${EtudiantSup.nom} a été suprimé`})
          )
     }
        ).catch(error=>{ res.status(500).json({message:"Le server est deconnecté"+error})})
 })
  }