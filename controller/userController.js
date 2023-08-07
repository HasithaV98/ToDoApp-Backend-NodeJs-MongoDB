const userServices=require('../services/userServices');

exports.register=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const userResponse=await userServices.registration(email,password);
        res.json({status:true,successs:"Registration completed"});

    }
    catch(error){
        throw error;
    }
}
exports.login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user=await userServices.checkUser(email);

        if(!user){
            throw new Error ("User not found");
            
        }
        const isMatch=user.comparePassword(password);
        if(isMatch===false){
            throw new Error ("Invalid Password");

        }
        let tokenData=({_id:user._id,email:user.email});
        const token=await userServices.generateToken(tokenData,"user","2h")

        res.status(200).json({status:true,token:token})
        

    }
    catch(error){
        throw error;
    }
}