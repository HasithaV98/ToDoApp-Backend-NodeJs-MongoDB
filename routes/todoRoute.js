const router=require('express').Router();
const todoController=require("../controller/todoController");
router.post('/addtodo',todoController.createTodo);


router.get('/getdata',todoController.getTodo);
router.get('/delete',todoController.deleteTodo);

module.exports=router;