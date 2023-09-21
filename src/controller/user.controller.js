const controller = {}
const userSchema = require('../models/user.model'); 

// create user
controller.index = async(req,res) =>{
    const user = userSchema(req.body);
    user.save()
    .then((data)=>res.json(data))
    .catch((error) => res.json({message: error}))

};

//get user 
controller.get = async(req,res) =>{
    userSchema.find().then((data)=>res.json(data)).catch((error) => res.json({message: error}))
};

// edit user

controller.edit = async (req,res) =>{
    const {id} = req.params;
    userSchema.findById(id).then((data)=>res.json(data)).catch((error) => res.json({message: error}))

};

// update user

controller.update = async (req,res)=>{
    const {id} = req.params;
    const {name,age,email} = req.body;
    userSchema.updateOne({_id: id}, {$set: {name, age, email} })
    .then((data)=>res.json(data))
    .catch((error) => res.json({message: error}))

} 

// delete user
controller.delete = async (req,res)=>{
    const {id} = req.params;
    userSchema.deleteOne({_id: id}).then((data)=>res.json(data)).catch((error) => res.json({message: error}))

}
 

module.exports = controller 