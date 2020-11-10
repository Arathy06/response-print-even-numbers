
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

app.get("/even",(req,res)=>{

    

    for(var i=1,n=100;i<=n;i++)
{
    if(i%2==0)

    {

    res.send(i);
    }
}
})

