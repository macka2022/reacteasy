const nodemailer=require('nodemailer')
module.exports=nodemailer.createTransport(
    {
        service:'gmail',
         host:'smtp.gmail.com',
          port: 587, // or  465
        secure: false,
        auth:{
            user:'amadoumackadiallo375@gmail.com',
            pass:process.env.PASS
}}
);
