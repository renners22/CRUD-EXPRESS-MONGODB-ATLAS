const express = require('express');
const router = express.Router();
const userSchema = require('../models/user.model');
const Controller = require('../controller/user.controller');

 
    // NT. esta es una forma de hacer la insercion de datos desde la ruta. ///////
    // router.post('/users', (req, res)=>{
        
    //     const user = userSchema(req.body);
    //     user.save()
        // .then((data)=>res.json(data))
        // .catch((error) => res.json({message: error}))

    // });
    // //////////////////////////////////////////////////////////////////////


// create user
router.post('/users', Controller.index)

// get user
router.get('/users', Controller.get)

// edit user
router.get('/user/:id', Controller.edit) 

// update user
router.put('/user/:id', Controller.update) 

router.delete('/user/:id', Controller.delete)

module.exports = router;