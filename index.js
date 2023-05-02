const express = require('express');
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;
const cheif = require ('./data/cheif.json');

app.use(cors()) ;


app.get('/',(req, res)=>{
 res.send('CookDesh Server is Running')
})

app.get('/cheif',(req,res)=>{

    res.send(cheif)
})






app.listen(port,()=>{
    console.log(`CookDesh API is running on port:${port}`)
})