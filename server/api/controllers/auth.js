import User from "../../models/user.js";

//register
const register = async (req, res, next) => {
try {
    const newUser = new User ({
        username:req.body.username,
        password:req.body.password,
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

};

export {register, login};
