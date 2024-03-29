const User = require("../schemas/admin");

module.exports.adminAuth = async  (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found");

        const validPassword = await User.findOne({password:req.body.password});
        !validPassword && res.status(400).json("wrong password");
        
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }   
}