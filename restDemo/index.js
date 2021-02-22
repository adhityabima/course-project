const express = require('express');
const app = express();

app.get('/makanan', (req,res) =>{
    res.send("dapet makanan dari get");
})

app.post('/makanan', (req, res)=>{
    console.log(req.body)
    res.send("dapet makanan dari post")
})

app.listen(3000,()=>{
    console.log("hey it's on 3000");
})