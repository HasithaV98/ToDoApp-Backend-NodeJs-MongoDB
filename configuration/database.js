const mongoose=require('mongoose');

const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newToDo').on('open',()=>{
    console.log('MongoDB Connected');
}).on('Error',()=>{
    console.log('MongoDB not connected');
});

module.exports=connection;