const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken) return res.status(401).json({ message: "Le token d'accès n'existe pas" });

    const token = accessToken.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: "Token invalide" });
        } else {
           
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getMinutes()+1); // Expires in 7 days
            res.cookie('accessToken', token, { httpOnly: true, secure: true, expires: expirationDate });

          
            req.user = decoded;
            next();
        }
    });
};