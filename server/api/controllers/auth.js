
import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//register
const register = async (req, res, next) => {
try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User ({
        username:req.body.username,
        password:hash,
        email:req.body.email
    })
    await newUser.save()
    res.status(200).send("new user registered");
} catch (error) {
    next(error)
}
}
//login
const login = async (req, res, next) => {
try {
    const user = await User.findOne(req.body.username);
    if (!user) { next(createError(404, 'User not found')); }

const isPaswordcorrect = await bcrypt.compare(req.body.password, user.password);
if(!isPaswordcorrect){next(createError(400, 'wrongpassword or username'))}

const token = jwt.sign({id: user._id, isAdmin: user.isAdmin},"secretkey")

const {password, isAdmin, ...otherdetails} = user._doc;  
res.cookie("access-token", token,{httpOnly:true}).status(200).json({...otherdetails});
} catch (error) {
    next(error);
} 
};

export {register, login};
