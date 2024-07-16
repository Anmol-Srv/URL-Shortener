const express = require('express');
const PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Yo");
});

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})