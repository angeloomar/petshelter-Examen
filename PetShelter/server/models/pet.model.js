const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const petSchema = new Schema({
    petName: {
        type: String,
        required: [true, 'Debe ingresar nombre de la mascota'],
        minlength: [3, 'No puede tener menos de 3 caracteres'],
        unique: true
    },
    petType: {
        type: String,
        required: [true, 'Debe ingresar el tipo de mascota'],
        minlength: [3, 'No puede tener menos de 3 caracteres'],
    },
    petDescription: {
        type: String,
        required: [true, 'Debe ingresar alguna descripción de la mascota'],
        minlength: [3, 'No puede tener menos de 3 caracteres'],
    },
    petLike: {
        type: Number,
    },
    petSkill1: {
        type: String,
    },
    petSkill2: {
        type: String,
    },
    petSkill3: {
        type: String,
    },

}, { timestamps: true });

petSchema.plugin(uniqueValidator, { message: '{PATH} ya existe, favor intentar con uno nuevo' });

const Pet = model('Pet', petSchema);

module.exports = Pet;