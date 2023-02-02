const { getAllPets, updatePet, createPet, removePet, getOnePet } = require("../controllers/pets.controllers");

module.exports = (app) => {
    app.get('/api/pet', getAllPets)
    app.get('/api/pet/:id', getOnePet);
    app.post('/api/pet', createPet);
    app.put('/api/pet/:id', updatePet);
    app.delete('/api/Pet/:id', removePet);
};
