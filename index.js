const express = require('express');
const app = express();
const db=require('./configuration/database');
const userModel=require('./model/userModel');

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world hi I am hASITHA');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
