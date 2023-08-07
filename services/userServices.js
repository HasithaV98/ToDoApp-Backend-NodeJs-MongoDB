const userModel=require('../model/userModel');
const jwt=require("jsonwebtoken");
class userServices{
    static async registration(email,password){

        try{

            const createUser=new userModel({email,password});
            return await createUser.save();

        }
        catch(error){
            throw error;
        }
        

    }
    static async checkUser(email){
        try{
            return await userModel.findOne({email});
            

        }catch(error){
            throw error;
        }
    }
    static async generateToken(tokenData,secretKey,jwy_expire){
        return jwt.sign(tokenData,secretKey,jwy_expire);
    }

}
module.exports=userServices;