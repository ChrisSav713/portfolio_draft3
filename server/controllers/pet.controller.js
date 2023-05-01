const { Error } = require('mongoose');
const Pet = require('../models/pet.model')

module.exports.getOne = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.getAll = (req, res) => {
    Pet.find({}).collation({locale:"en"}).sort({type:1}).exec(function(err, items) {
        if(err) {
            return res.json(err)
        } else {
            return res.json(items)
        }
    })
}

module.exports.updateOne = (req, res) => {
    Pet.findByIdAndUpdate({ _id: req.params.id}, req.body, {runValidators:true})
    .then(item => res.json(item))
    .catch(err => res.json(err))
    }

module.exports.deleteOne = (req, res) => {
    Pet.findByIdAndDelete({ _id: req.params.id})
    .then(item => res.json(item))
    .catch(err => res.json(err))
}

module.exports.createOne = async (req, res) => {
    
    const alreadyExists = await checkExists(req.body.name)           //Making sure there are no duplicate names
    
    if(!alreadyExists) {
        Pet.create(req.body)
        .then((item) => res.json(item))
        .catch((err) => res.json(err))
    } else {
        res.status(200).json({                     
            "name":"ValidationError",              
            "message":"Validation Failed",         
            "errors": {
                "name": {
                    "name":"ValidationError", 
                    "message":"That name already exists in database"
                }
            }
            //I'm returning status 200 despite the name already existing here cause it seems all past 
            //hard coded validation errors also gave back Ok status responses just with "ValidationError" somewhere in the body.
            //so since I already have things setup to catch responses setup like that, I'm keeping things the same
        })
    }
}

async function checkExists(fieldIn) {
    const exists = await Pet.exists({name: fieldIn})
    
    if(exists !== null) {            //returned an id, so the name already exists
        return true  
    }
    else {                          //returned a null, so that name doesn't already exist
        return false  
    } 
}