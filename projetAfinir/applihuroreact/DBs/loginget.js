module.exports  =(app) =>{
    app.get('/login',(req,res) => {
       if(req.session.user) {
        res.status(200).json({logIn:true,user:req.session.user})
        console.log(req.session.user)
       }else{
        res.status(200).json({logIn:false})
       }
    })
}