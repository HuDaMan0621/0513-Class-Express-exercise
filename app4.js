const express = require('express');
const data = require ('./data'); //we don't need it for this exercise
const app = express();
const port = 8000;

app.get('/year', function (req, res) {

    var year = req.query.year || 'age';
    console.log(year);
    console.log(req.query.age);
    // if (req.query.lang != '') {
    //     res.send('you were born in' + (req.query.lang - 2020));
    // }
    // var newYear = year.console.log(req.query.year);
    // var current = 2020;
    // console.log(current);
    // console.log(current);

    // res.send('you were born in ' + (2020 - req.query.age) + '.');
    // res.send(`req.query.lang is a${typeof Number(req.query.lang)}`);
    res.send('you were born in ' + (2020 - Number(req.query.age)));

})

app.listen(port, () => console.log (`listen on port http://localhost:${port}`));



// app.get(`/hello1`, function(req, res){

//     var name = req.query.name || 'world';
    
//     res.send('Hello ' + name + '!');
    
// });