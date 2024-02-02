
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) => {
    try{
        const token = req.body.token;
        if(!token){
            res.status(401).json({
                success:false,
                message:"token is missing",
            });
        }

        try{
            const payload = jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);

            req.user = payload;
            next();

        } catch(err){
            res.status(401).json({
                success:false,
                message:"verification failed",
            });
        }

    } catch(err) {
        res.status(401).json({
            success:false,
            message:"authentication failed",
        });
    }
}