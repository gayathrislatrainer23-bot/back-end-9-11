const jwt = require("jsonwebtoken");


exports.varifyAuthToken = async (req ,res , next)=>{

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token =  req.headers.authorization.split("")[1]
    }
    if(!token) return req.status(401).json({
        sucess:false,
        message: "Not authorized"
    })

    try{
const decoded = jwt.verify(token,"secret")
req.user = decoded;
next();
    }catch(err){

    }

}