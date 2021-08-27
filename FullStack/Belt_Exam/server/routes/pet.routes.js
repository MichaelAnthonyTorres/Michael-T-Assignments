const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get("/api/pet", PetController.getAllPets);
    app.post("/api/pet", PetController.createPet);
    app.get("/api/pet/:petId", PetController.getOnePet);
    app.put("/api/pet/:petId", PetController.updatePet);
    app.delete("/api/pet/:petId", PetController.deletePet);
}
