const mongoose=require('mongoose');
const db=require('../configuration/database');
const bcrypt=require("bcrypt");


const {Schema}=mongoose;

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        
        required:true,
        
    }

});
userSchema.pre('save',async function(){
    try{
        var user=this;
        const salt=await(bcrypt.genSalt(20));
        const hashpass= await bcrypt.hash(user.password,salt);
        user.password=hashpass;

    }catch(Error){
        throw Error;
    }

});

userSchema.methods.comparePassword=async function(userPassword){
    try {
        const isMatch=await bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}


const userModel=db.model('user',userSchema);
module.exports=userModel;