const Pet = require('../models/pet.model')

const createPet = (req, res) => {
    Pet.create({
        name: req.body.name,
        species: req.body.species,
        description: req.body.description,
        skill: req.body.skill,
    }).then((addPet)=> res.json({addPet}))
    .catch((err) => res.status(400).json({error: err}))
}

const getAllPets = (req, res) => {
    Pet.find()
    .then((allPets)=> res.json({allPets}))
    .catch((err) => res.status(400).json({error: err}))
}

const getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.petId})
    .then((onePet)=> res.json({onePet}))
    .catch((err) => res.status(400).json({error: err}))
}

const updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.petId},
        req.body,
        {new: true,
        runValidators: true
    })
    .then((currentPet)=> res.json({currentPet}))
    .catch((err) => res.status(400).json({error: err}))
}

const deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.petId})
    .then((removePet)=> res.status(200).send('Deleted'))
    .catch((err) => res.status(400).json({error: err}))
}


module.exports = {
    createPet,
    getOnePet,
    getAllPets,
    updatePet,
    deletePet,
}

