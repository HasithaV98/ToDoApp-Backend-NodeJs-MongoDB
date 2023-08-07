const todoModel=require("../model/todoModel");

class TodoServices{
    static async createTodo(userId,title,description){
        const createTodo=new todoModel({userId,description,title});
        return await createTodo.save();

    }
    static async getTodo(userId){
        const dotoData=await todoModel.find(userId);
        return dotoData;

    }
    static async deleteTodo(idd){
        const deleted=await todoModel.findByIdAndDelete({_id:id});
        return deleted;

    }
}
module.exports=TodoServices;