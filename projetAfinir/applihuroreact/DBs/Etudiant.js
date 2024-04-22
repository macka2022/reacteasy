

module.exports=(con,DataTypes) =>{
    const Etudiant=con.define('Etudiant',
    {   
        "code":{
            "type":DataTypes.STRING,
            primaryKey:true,
            autoIncrement:false,
            "unique":{
                "message":`ce code est deja utilisé `
            },
            validate:{
                notEmpty:{msg: `veillez remplir le champs code`},
                }
        },
        "nom":{
            "type":DataTypes.STRING,
            "allownull":true,
            validate:{
                notEmpty:{message: `veillez remplir le champs nom`},
                }
        },
        "niveau":{
            "type":DataTypes.STRING,
            "allownull":true,
            validate:{
                notEmpty:{message: `veillez remplir le champs niveau`},
                }
            
        },
        "prenom":{
            "type":DataTypes.STRING,
            "allownull":true,
            validate:{
                notEmpty:{message: `veillez remplir le champs prenom`},
                }
        },
        "filiere":{
            "type":DataTypes.STRING,
            "allownull":true
        },
        
    },
    {
        tableName:"etudiantheb",
        timestamps:true,
        createdAt:'create',
        
        updatedAt: false  
    })
    return Etudiant
} 