 import jwt from "jsonwebtoken";

 export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return res.status(404).json({message: "user not authenticated!" })
    }
 
 jwt.verify(token,"secretkey",(err, user)=>{
    if (err) return res.status.json({message : "tokenisnotvalid"});
    req.user= user;
    next()
 });

};

export const verifyuser=(req,res,next) =>{
   verifyToken(req,res,next, () => {
    if(req.user.id === req.params.id){
        next()
    }else{
        if (err) return res.status.json({message : "not authorized"});   
    }
   }) 
}