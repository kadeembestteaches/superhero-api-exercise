const superHeroModel = require("../models/SuperHeroModel.js");


exports.getAllSuperheroes = (req,res)=>{

      //  new superHeroModel(req.body)

        res.json({
            message : "Spiderman nno way was an AWESOME MOVIE. YOU SHOULD IT"
        })

};

exports.getASuperhero = (req,res)=>{

    res.json({
        message : `This is a get request with the id ${req.params.id}`
    })

};


exports.createASuperhero = async(req,res)=>{

    res.json({
        message : "The Superhero was created successful ",
       
    })


};


exports.deleteASuperhero = (req,res)=>{

    res.json({
        message : `This is a DELETE request with the id ${req.params.id}`
    })


};

exports.updateASuperhero = (req,res)=>{

    res.json({
        message : `This is a PUT request with the id ${req.params.id}`
    })


};