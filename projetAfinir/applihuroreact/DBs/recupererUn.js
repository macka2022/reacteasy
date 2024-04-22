const { Etudiant } = require("./connexion")

module.exports= (app)  => {
    app.get('/etudiantOne/api/:code' , (req,res) => {
        const codeP=req.params.code
        Etudiant.findOne({where:{code:codeP}})
        .then(etude=>{
            res.status(200).json({data:etude})
        
        })
})
}