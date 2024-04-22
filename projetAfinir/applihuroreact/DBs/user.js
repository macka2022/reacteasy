module.exports= (connect , DataTypes)=>{
 const User=connect.define('User',
 {
          "id":{
            type:DataTypes.INTEGER,
            primaryKey:true
          },
        "nom":{
            type:DataTypes.STRING,
            notAllow:true
        },
        "username":{
            type:DataTypes.STRING,
            notAllow:true
        },
        "password":{
            type:DataTypes.STRING,
            notAllow:true
        },
        "numero":{
            type:DataTypes.INTEGER,
            notAllow:true,

        },
        "email":{
           type:DataTypes.STRING,
           notAllow:true
     },
     "token":{
        type:DataTypes.STRING
     }
  }
  ,{
    updateAt:false
  }
      
  )
  return User
}