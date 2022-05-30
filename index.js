const express= require('express');
const test= require('./test')
const app=express();
const path=require('path');
const {readFileSync,readFile,writeFile,writeFileSync}=require('fs')
const os =require('os');
//app.use('cors');
//var config=path.join(__dirname,'/config.json');
let port;
app.get('/',(req,res)=>{
    res.send('<h1>first auto scaling app</h1>');
});

let config=readFileSync('./config.json','utf-8')
    port=JSON.parse(config).port
   


app.listen(port,()=>{
    console.log(`server started  on port ${port}`);

    setInterval(()=>{
        console.log({
            name:os.type(),
            uptime:os.uptime()/3600,
            release:os.release()
        })
    },36000)
    
   
  
});