const express = require("express");
var showdown  = require('showdown')


const app = express();


app.use(express.text());

app.post("/markdown",(req,res)=>{
    try{
     const markDownText = req.body;
     
     console.log(req.headers["content-type"]);
     
     console.log(markDownText);
     
      var converter = new showdown.Converter();
      html = converter.makeHtml(markDownText);
     console.log(html);
     
      res.send(html)
    }catch(err){
     console.log(err);
     
    }



})


app.listen(5000,()=>{
    console.log("app listening on port 5000");
    
})