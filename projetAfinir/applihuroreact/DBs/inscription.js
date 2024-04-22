
const transport=require('./configuration')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const {User}=require('./connexion')
const bcrypt=require('bcrypt')
module.exports= (app)=>{
    app.post('/inscrire',(req,res)   =>{
            bcrypt.genSalt(10)
        .then((salt) => {
            console.log(req.body.password)
            return bcrypt.hash(req.body.password, salt);
        })
        .then((hash) => {
             User.create({...req.body, password:hash})
             .then(user => {
                console.log(process.env.PASS)
                const message = {
                    from: 'amadoumackadiallo375@gmail',
                    to: req.body.email,
                    subject: `L'utilisateur  a ete connecté de nom : ${req.body.nom}` ,
                    html:` <h3>Mr/Mmme ${user.nom} fellitation la Connexion reussi</h3>`,
                  };
                  
                  transport.sendMail(message, (error, info) => {
                    if (error) {
                      console.error(error);
            
                      return res.status(200).json({ message: 'Inscription réussie !', user });
                    }
                    
                    console.log('Email envoyé: ' + info.response);
                   return res.status(200).json({ message: 'Inscription réussie !', user });
                  });
                  return res.status(200).json({ message: 'Inscription réussie !', user });

             })
             .catch(err => {
            
                if(err instanceof UniqueConstraintError){
                    return res.status(400).json({message:err.msg,data:err})
                 }
                 if(err instanceof ValidationError){
                    
                     return res.status(400).json({message:err.msg,data:err})
                }
               
                const message=`Veuiller reessayer dans quelques intants`;
                return res.status(500).json({message})
    
            });
        })
})
}