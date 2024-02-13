// step - 1 : create a floder
// step - 2 : move into that folder
// step 3 : npm init - y
// step 4: open folder using VS Code
// step55: npm i express
// step6: create server.js


const express = require('express');
const app = express();

// used to parser req.body in express -> Put or post
const bodyParser = require('body-parser');
// specifically parse json data & add it to the request Body Object
app.use(bodyParser.json());    

app.listen(3000 , () => {
    console.log("server Started at port no. 3000");
});

app.get('/' , (req,res) => {
    res.send("Helllo Jee , kaise ho saare");
})

app.post('/api/cars', (req,res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully");
})