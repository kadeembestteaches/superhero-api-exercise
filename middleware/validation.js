exports.createSuperheroValidation = (req,res,next)=>{

    
    const errors = [];
   
    if(!req.body.heroName ||  req.body.heroName === "")
    {
        errors.push( {field : "heroName", message :"You must provide the hero alias"})
    
    }


    if(!req.body.realName  || req.body.realName === "" )
    {

        errors.push( {field : "realName", message :"You must provide the hero real name"})

    }


    //THERE ARE ERROS 
    if(errors.length > 0)
    {
        res.status(400).json({
        message : " You did not successfull create a superhero",
        data : errors  
        })
    }

    else
    {
        next(); // move on to the next middleware (route handler)

    }




}