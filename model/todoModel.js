const mongoose=require('mongoose');
const db=require('../configuration/database');
const userModel = require('./userModel');

const {Schema}=mongoose;


const userTodoSchema=new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:userModel.modelName

    },
    title:{
        type:String,
        required:true,
      
    },
    description:{
        type:String,
        
        required:true,
        
    }

});

const todoModel=db.model('todo',userTodoSchema);
module.exports=todoModel;