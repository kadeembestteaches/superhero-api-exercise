const express = require('express')
const router = express.Router();

// middleware that is specific to this router


router.get("/", (req,res)=>{

    res.json({
        message : "This is a Get Request"
    })
})
router.post("/", (req,res)=>{
    
    res.json({
        message : "This is a POST Request"
    })

})


router.get("/:id", (req,res)=>{
    
    res.json({
        message : `This is a get request with the id ${req.params.id}`
    })
})


router.put("/:id", (req,res)=>{
    
    res.json({
        message : `This is a PUT request with the id ${req.params.id}`
    })
})

router.delete("/:id", (req,res)=>{
    
    res.json({
        message : `This is a DELETE request with the id ${req.params.id}`
    })
})

module.exports = router;





