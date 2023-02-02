import axios from "axios";


export const createNewPet = (pet) => axios.post('http://localhost:8080/api/pet', {
    pet
});

export const getAllPets = () => axios.get('http://localhost:8080/api/pet');

export const deletePet = (id) => axios.delete(`http://localhost:8080/api/pet/${id}`);

export const getOnePet = (id) => axios.get(`http://localhost:8080/api/pet/${id}`);

export const updateOnePet = (id, pet) => axios.put(`http://localhost:8080/api/pet/${id}`, {
    pet
})