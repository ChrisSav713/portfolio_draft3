const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.post('/api/pets', PetController.createOne)
    app.get('/api/pets', PetController.getAll)
    app.get('/api/pets/:id', PetController.getOne)
    app.put('/api/pets/update/:id', PetController.updateOne)
    app.delete('/api/pets/delete/:id', PetController.deleteOne)
}