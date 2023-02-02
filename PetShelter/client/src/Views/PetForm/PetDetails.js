import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import styles from './PetDetails.module.scss';
import { deletePet, getOnePet } from "../../services/pets-service";

const PetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState({
        petName: '',
        petType: '',
        petDescription: '',
        petSkill1: '',
        petSkill2: '',
        petSkill3:'',
        petLike: 0,
    });

    const getOnePetFromService = async () => {
        try {
            const petFromService = await getOnePet(id);
            setPet({ ...petFromService.data.pet})  

        } catch(error) {
            console.log("getOnePetFromService ~ error", error)
            
        };
    };

    useEffect(() => {
        id && getOnePetFromService();
    }, [id]);

// En este formulario no se va a Eliminar    
const removePetFromService = async (id) => {
    try {
        await deletePet(id);
        navigate("/mascotas");
    } catch (error) {
       console.log("removePetFromService  error: ", error)
       
    }
}

    return (
        <div className={styles['form-container']}>
            <div className = "cabecera">
                <h1>Pet Shelter</h1>
                <h3> Details about: {id ? pet.petName : ''}</h3>
                <Button variant="outline-info" onClick={() => removePetFromService(pet._id)} >Adopt {pet.petName}</Button>
            </div>
                    <p> Pet type : {pet.petType}</p>
                    <p> Pet Description : {pet.petDescription}</p>
                    <p> Skills :  {pet.petSkill1}</p>
                    <p>           {pet.petSkill2}</p>
                    <p>           {pet.petSkill3}</p>
                    <Button onClick={() => navigate("/mascotas")} variant="info">back to home</Button>
            </div>
    )
};

export default PetDetails;

