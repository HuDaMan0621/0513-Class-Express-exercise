const express = require('express');
const data = require('./data');
const app = express();
const port = 8000;



app.get(`/hello1`, function(req, res){

    var name = req.query.name || 'world';
    
    res.send('Hello ' + name + '!');
    
});

app.get(`/year`, function(req, res){

    var year = req.query.year || 'age';
    var current = 2020;
    // console.log(current);
    res.send('you were born in ' + (current - year) + '.');
    
});
console.log(req.query.lang);
// let intro = `this is the profile of ${user.name}`;
// if (req.query.lang && req.query.lang === 'yoda') {
//     intro = `the profile of ${user.name} this is.`
// }
//request.query.lang 
// /year?age=32 it will display You were born in 1985.


app.get('/greet/Jamison', function(req, res) {
    
    var names = 'Jamison';  
    req.query.names || (`${names}`);
    res.send(`hello ${names} !`);
})

app.get('/greet/Manny', function(req, res) {
    
    var names = 'Manny';  
    req.query.names || (`${names}`);
    res.send(`hello ${names} !`);
})

app.get('/greet/Kennedy', function(req, res) {
    
    var names = 'Kennedy, Jamison, Manny';  
    req.query.names || (`${names}`);
    res.send(`hello ${names} !`);
})

app.listen(port, () => console.log (`listen on port http://localhost:${port}`));


// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"