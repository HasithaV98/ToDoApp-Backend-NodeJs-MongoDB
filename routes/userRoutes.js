const router=require('express').Router();
const userController=require('../controller/userController');


router.post('/save',userController.register);
router.post('/log',userController.login);

module.exports=router;