const todoServices=require("../services/todoServices");

exports.createTodo=async (req,res,next)=>{
    try {
        const {userId,title,descripion}=req.body;
        let todo=await todoServices.createTodo(userId,title,descripion);
        res.json({status:true,success:todo});
    } catch (error) {
        next (error);
    }
}
exports.getTodo=async (req,res,next)=>{
    try {
        const {userId}=req.body;
        let todo=await todoServices.getTodo(userId);
        res.json({status:true,success:todo});
    } catch (error) {
        next (error);
    }
}
exports.deleteTodo=async (req,res,next)=>{
    try {
        const {id}=req.body;
        let deleted=await todoServices.deleteTodo(id);
        res.json({status:true,success:deleted});
    } catch (error) {
        next (error);
    }
}