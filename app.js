const express = require('express');
const env = require('dotenv').config();
const app =  express();
const path = require('path');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const db = require('./config/db');
db();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',[path.join(__dirname,'views/user'),path.join(__dirname,'views/admin')]);
app.use(express.static(path.join(__dirname,'public')));

app.use('/',userRouter);
app.use('/admin',adminRouter)


app.listen(process.env.PORT,()=>{
    console.log('server running')
})

module.exports = app;