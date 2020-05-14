const express = require('express'); 
const app = express(); 
const port = 8000;

const style = require('./style.css')

app.get("/", (req, res) => res.send(`

Hello WOrld!<br><br>

Create an express app. <br>
Have the app route to root and print to the browser some sort of inspiring message. <br>
Create a route for : Basic Routing <br>
<ul>
<li>legal : Send to the browser the legal terms of your site <br>
<li>about : Send to the browser the info about your site <br>
<li>contact : Send to the browser contact information <br></li></ul>
Add a link from each page to each other page <br>
Bonus - Have the responses be it's own module with a full html document. <br>
Super Bonus - Add the same header and footer to every page without copying the code onto each page. hint - You can use a function or modules <br>


`)); //request handler, req coming from the browser, res is sending back to the browser

// app.put('/legal', function (req, res) {
//     res.send('Merry Chrismas')
//   })

app.get('/legal', (req, res) => res.send('this is legal')); // it creates a route it matches 8000/legal

app.get('/legal/:page', (req, res) => res.send(req.params.page)); // it creates a route it matches 8000/legal and add /:page (page number);
app.get('/about', (req, res) => res.send('this is about')); // it creates a route it matches 8000/about
app.get('/contact', (req, res) => res.send('this is contact')); // it creates a route it matches 8000/contact

app.listen(port, () => console.log(`listening on port http://localhost:${port}`));

// Create an express app.
// Have the app route to root and print to the browser some sort of inspiring message.
// Create a route for : Basic Routing
// legal : Send to the browser the legal terms of your site
// about : Send to the browser the info about your site
// contact : Send to the browser contact information
// Add a link from each page to each other page
// Bonus - Have the responses be it's own module with a full html document.
// Super Bonus - Add the same header and footer to every page without copying the code onto each page. hint - You can use a function or modules