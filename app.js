const express=require('express');
const port=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extented: false} ))

app.listen(port, function(){
console.log("Express esimerkki portissa "+port);
});
app.get('/',function(request,response){
    response.send("Nodemon testi Express API esimerkki ilman tietokantaa portissa "+port);
});

//Middleware
app.use(function(request, response, next){
    console.log("Middleware 1");
   next(); 
});

app.get("/toka",function(request, response){
    response.send("Endpoint toka");
    console.log("/toka");
});

//Middleware 2
app.use(function(request, response, next){
    console.log("Middleware 2");
    next();
})

app.get("/kolmas/:fname", function(request, response){
    response.send("Terve " + request.params.fname);
});

app.get("/neljas/:fname?", function(request, response){
    if(request.params.fname){
    response.send("Terve " + request.params.fname);
    }
    else{
        response.send("Terve tuntematon!");
    }
});

app.post("/", function(request,response){
    response.send(request.body);
    console.log(request.body.fname);
});

app.put("/:id",function(request, response){
    response.send(request.body);
    console.log(request.params.id);
});

module.exports=app;
