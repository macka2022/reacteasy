const { Op } = require("sequelize")
const {User} = require('./connexion')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require('dotenv').config()
module.exports=  (app)  =>  {
 app.post('/login',(req, res)  =>    {
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.email);
    User.findOne({where:{
                [Op.and]:[
                  {email:req.body.email},
                  {username:req.body.username}
                ]}})
    .then(users=>{
    
      console.log(users);
      console.log(users);
        if(!users){
            return res.status(404).json({message:'password, user name ou email est incoorecte 1'})
        }

        bcrypt.compare(req.body.password, users.password )
        .then(userExist   =>  {
              if(!userExist){
               return  res.status(401).json({message:'password, user name ou email est incoorecte 2'})

              }
              let jwtSecretKey = process.env.JWT_SECRET_KEY;
              const token = jwt.sign({ userId: users.id }, jwtSecretKey, {
                expiresIn: '60s',})
                // res.setHeader('Authorization', `Bearer ${token}`);
              return   res.json({users,token})   
       })
  })  
})
}