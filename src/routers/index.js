const express = require('express')

const router = express.Router()

router.get('/', async (req,res) =>{
    res.send("Esta es la API server");
});

module.exports = router