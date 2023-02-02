const Pet = require("../models/pet.model");

module.exports.getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json({
            message: 'Se entregan de manera exitosa todas las mascotas registradas',
            pets,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}

module.exports.createPet = async (req, res) => {
    try {
        const newPet = await Pet.create(req.body.pet);
        res.json({
            message: 'Se crea de manera exitosa la nueva mascota',
            newPet,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.updatePet = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedPet = await Pet.findByIdAndUpdate(id, body.pet, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la información de la mascota',
            updatedPet,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removePet = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPet = await Pet.deleteOne({ _id: id });
        res.json({
            message: 'Se elimina de manera exitosa la información de la mascota',
            deletedStudent,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.getOnePet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id);
        res.json({
            message: 'Se trae de manera exitosa la información de la mascota',
            pet,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}