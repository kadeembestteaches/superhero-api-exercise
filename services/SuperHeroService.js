const superHeroModel = require("../models/SuperHeroModel.js");


exports.getAllSuperheroes = async (req,res)=>{



    //filter data 

    const queryStringObj = {};

    if(req.query.gender)
    {
        queryStringObj.gender = req.query.gender
    }

    if(req.query.universeType)
    {
        queryStringObj.universeType = req.query.universeType
    }


    try
    {
        const heroes = await superHeroModel.find(queryStringObj) //async operaiton (non-blocking)
     
        res.json({
            message : "A List of Superhero",
            results : heroes,
            totalHereos : heroes.length
        })
        
    }
    catch(err)
    {
        res.status(500).json({
            message :err
        })
    }


     

};

exports.getASuperhero =  (req,res)=>{


    superHeroModel.findById(req.params.id)
    .then(superhero=>{

       
        if(superhero)
        {
            res.json({

                message : `superhero with the id ${req.params.id}`,
                result : superhero
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no superhereo in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{


        if(err.name==="CastError" && err.kind==="ObjectId")
        {

            res.status(404).json({
                message : `There is no superHero in our database with the id ${req.params.id}`
            })
        }

        else
        {
            res.status(500).json({
                message :err
            })
        }


 
    })

};


exports.createASuperhero = async(req,res)=>{


    //validation code 
    const superHero = new superHeroModel(req.body);
    superHero.save()
    .then(newSuperHero=>{

        res.status(201).json({
            message :"The superHero Was successfully created and stored in the databaase",
            result : newSuperHero
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message :err
        })
    })

};


exports.deleteASuperhero = (req,res)=>{


    superHeroModel.findByIdAndRemove(req.params.id)
    .then((superhero)=>{

        if(superhero)
        {
            res.json({
                message: `The superHero with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `Superhero with ID ${req.params.id} was not found`
            })
        }


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.updateASuperhero = (req,res)=>{

    superHeroModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(superhero=>{


        //if hero is not null

        if(superhero)
        {
            res.json({
                message : `The superHero with the id ${req.params.id} was updated`,
                result : superhero
            })

        }

        //hero contains null
        else
        {
            res.status(404).json({
                message : `The superHero with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};