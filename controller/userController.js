const User = require("../model/UserModel");
const bcrypt = require('bcrypt');
//create a new user -> register user

const registerUser = async(req,res)=>{
    const {username, userEmail, userPassword} = req.body
    if(!username || !userEmail || !userPassword){
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    const isExistingUser = await User.findOne({where:{userEmail}})
    //returns object or null
    if(isExistingUser){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    //Create User
    User.create({
        username,
        userEmail,
        userPassword: bcrypt.hashSync(userPassword, 10)
    })
    return res.status(201).json({
        message:"User registered successfully"
    })

}

 


module.exports = {
    registerUser
}