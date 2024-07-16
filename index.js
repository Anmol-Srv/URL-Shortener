const express = require('express');
const {connectMongoDb} = require('./connection/connect')
const urlRoute = require('./routes/url')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/url', urlRoute);

connectMongoDb("mongodb://localhost:27017/url-shortener").then(console.log("MongoDB Connected Succesfully"))
.catch(err => console.log("Error in connecting database",err));

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})