const express = require('express');
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;
const cheif = require('./data/cheif.json');

app.use(cors()) ;


app.get('/',(req, res)=>{
 res.send('CookDesh Server is Running')
})

app.get('/cheif',(req,res)=>{

    res.send(cheif)
})


app.get('/chef/:id',(req,res)=>{
    const id = req.params.id 
    console.log(id)
    const find = cheif.find(chef => chef.id == id)
    res.send(find)
})






app.listen(port,()=>{
    console.log(`CookDesh API is running on port:${port}`)
})