const express = require('express')
const router = express.Router();

const superheroService = require("../services/SuperHeroService.js");

const { createSuperheroValidation} = require("../middleware/validation.js")


// middleware that is specific to this router


// GET /superheroes 

//GET  /superheroes?universeType=Marvel
router.get("/", superheroService.getAllSuperheroes);

router.post("/",createSuperheroValidation,superheroService.createASuperhero);

router.get("/:id", superheroService.getASuperhero);

router.put("/:id", superheroService.updateASuperhero);

router.delete("/:id", superheroService.deleteASuperhero);

module.exports = router;





