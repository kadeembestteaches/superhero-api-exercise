const express = require("express");

const superheroController = require("./controllers/SuperHeroController.js");

//APP OBJECT IS THE CEO!
const app = express();


//superheroes/helloworld
app.use("/superheroes",superheroController);




const PORT = 3000;
app.listen(PORT, ()=>{

    console.log(`Web Server is up an running on PORT : ${PORT}`);
})