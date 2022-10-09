require('./config/config');
require('./models/db');

const express=require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const rtsIndex=require('./routes/index.router');

var app=express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api',rtsIndex);

app.use((err,req,res,next)=>{
    if (err.name=='Validation error'){
        var valErrors=[];
        Object.keys(err.errors).forEach(key=>valerrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
})

app.listen(process.env.PORT,()=>{console.log(`Server started at port:${process.env.PORT}`)});
