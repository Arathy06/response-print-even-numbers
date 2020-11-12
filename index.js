
var express = require('express')

var app=express()



app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})

app.get("/",(req,res)=>{

    res.send("To print even numbers")
})

app.get("/even",(req,res)=>{

    var i=1,n=100;
    while(i<=n)
    {
    if(i%2==0)

    {

    res.status(200).json(i);
    i++;
    }
}
})

