const express = require('express')
const router = express.Router();

const superheroService = require("../services/SuperHeroService.js");

// middleware that is specific to this router


router.get("/", superheroService.getAllSuperheroes);

router.post("/", superheroService.createASuperhero);

router.get("/:id", superheroService.getASuperhero);

router.put("/:id", superheroService.updateASuperhero);

router.delete("/:id", superheroService.deleteASuperhero);

module.exports = router;





