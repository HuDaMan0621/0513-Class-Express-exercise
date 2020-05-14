const express =require('express');
const data = require("./data");
const app = express();
const port = 8000;

// console.log(data) //check to see if the data is coming from the data.js

// app.get("/", (req, res) => res.json(data));
app.get("/cat", (req, res) => res.json(data.filter(animal=>animal.type =="cat")));
app.get("/dog", (req, res) => res.json(data.filter(animal=>animal.type =="dog")));
app.get("/:id", (req,res) => res.json(data.filter(a=> a.id == req.params.id)))
app.get("/", (req, res) => {
    let age = req.query.age;
    let color = req.query.color;
    let a = [];
    if(age){
        a = data.filter(an => an.age == age);
    } 
    if(color){
        a = a.filter(an =>an.color == color);
    }

    res.json(a)

});


app.listen(port, () => console.log(`listen on port http://127.0.0.1:${port}`));

// app.get("/", (r, res) => )

// app.get('/hello1', function(req, res){

//     var name = req.query.name || 'world';
    
//     res.send('Hello ' + name + '!');
    
//     });