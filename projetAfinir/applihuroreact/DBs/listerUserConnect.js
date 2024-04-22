const { User } = require("./connexion")
module.exports= (app) =>  {
    app.get('/listeruser' , (req,res) =>{
        User.findAll()
        .then(user=>{
            res.status(200).json({message:'User qui sont connecter a ma base de donnée',data:user})
        })
        .catch(__ =>{
            res.status(500).json({message:'Reessayer plus tard'})
        })
    })
}