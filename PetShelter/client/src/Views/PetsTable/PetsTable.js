import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getAllPets } from "../../services/pets-service";
import styles from './PetsTable.module.scss';

const PetsTable = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    const getPetsFromService = async () => {
        try {
            const petsFromService = await getAllPets();
            setPets(petsFromService.data.pets);
        } catch (error) {
            console.log("getPetsFromService error: ", error)
            
        }
    };


    useEffect(() => {
        getPetsFromService();
    }, []);
    

    return (
        <div className={styles["table-container"]}>
            <h1>Pet Shelter</h1>
            <Table className={styles["table-pets"]} striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.length > 0 ? pets.map((pet, idx) => (
                            <tr key={pet._id}>
                                <td>{idx +1}</td>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <Button variant="outline-info" onClick={() => navigate(`/detalle-mascota/${pet._id}`)} >details</Button>
                                    <Button variant="outline-info" onClick={() => navigate(`/crear-mascota/${pet._id}`)} >Edit</Button>
                                </td>
                            </tr>
                        )) : 
                            <tr>
                                <td colSpan={4}>There is no registered pet</td>
                            </tr>
                    }
                </tbody>
            </Table>
            <Button variant="info" onClick={() => navigate("/crear-mascota")} >add a pet to the shelter</Button>
        </div>
    )

}

export default PetsTable;