import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import styles from './PetForm.module.scss';
import { createNewPet, getOnePet, updateOnePet } from "../../services/pets-service";

const PetForm = () => {
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
    const [errorsResponse, setErrorsResponse] = useState();

    const getOnePetFromService = async () => {
        try {
            const petFromService = await getOnePet(id);
            setPet({ ...petFromService.data.pet});

        } catch(error) {
            console.log("getOnePetFromService ~ error", error)
            
        };
    };

    // Acá debo revisar como va el Flujo
    useEffect(() => {
        id && getOnePetFromService();
    }, [id]);

    const petSchema = Yup.object().shape({
        petName: Yup.string()
            .min(2, 'Too Short!')
            .required('Debe ingresar el nombre de la mascota'),
        petType: Yup.string()
            .min(2, 'Too Short!')
            .required('Debe ingresar el Tipo de mascota (cat, dog, bird...'),
        petDescription: Yup.string()
            .min(2, 'Too Short!')
            .required('Debe ingresar una descripción de la mascota'),
        petSkill1: Yup.string()
            .min(3, 'Too Short!'),
        petSkill2: Yup.string()
            .min(3, 'Too Short!'),
        petSkill3: Yup.string()
            .min(3, 'Too Short!'),
//        petLike: Yup.number(),
    });

    const sendNewPet = async (values) => {
        try {
            const newPet = id ? await updateOnePet(id, values) : await createNewPet(values);
            navigate("/mascotas");
        } catch (error) {
            setErrorsResponse(error.response.data.error.errors)
        }
    };

    return (
        <div className={styles['form-container']}>
            <div className = "cabecera">
                <h1>Pet Shelter</h1>
                <p>{id ? pet.petName : ''}</p>
                <Button onClick={() => navigate("/mascotas")} variant="info">back to home</Button>
            </div>
            <Formik
                enableReinitialize
                initialValues={pet}
                // validationSchema={petSchema}
                onSubmit={sendNewPet}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="petName">Pet Name:</label>
                        <Field name="petName" />
                        {errors.petName && touched.petName ? (
                            <div>{errors.petName}</div>
                        ) : null}
                        {errorsResponse?.petName && (
                            <div>{errorsResponse.petName.message}</div>
                        )}

                        <label htmlFor="petType">Type Name:</label>
                        <Field name="petType" />
                        {errors.petType && touched.petType ? (
                            <div>{errors.petType}</div>
                        ) : null}
                        {errorsResponse?.petType && (
                            <div>{errorsResponse.petType.message}</div>
                        )}

                        <label htmlFor="petDescription">Pet Description:</label>
                        <Field name="petDescription" />
                        {errors.petDescription && touched.petDescription ? (
                            <div>{errors.petDescription}</div>
                        ) : null}
                        {errorsResponse?.petDescription && (
                            <div>{errorsResponse.petDescription.message}</div>
                        )}

                        <label htmlFor="petSkill1">Skill 1:</label>
                        <Field name="petSkill1" />
                        {errors.petSkill1 && touched.petSkill1 ? (
                            <div>{errors.petSkill1}</div>
                        ) : null}
                        {errorsResponse?.petSkill1 && (
                            <div>{errorsResponse.petSkill1.message}</div>
                        )}

                        <label htmlFor="petSkill2">Skill 2:</label>
                        <Field name="petSkill2" />
                        {errors.petSkill2 && touched.petSkill2 ? (
                            <div>{errors.petSkill2}</div>
                        ) : null}
                        {errorsResponse?.petSkill2 && (
                            <div>{errorsResponse.petSkill2.message}</div>
                        )}

                        <label htmlFor="petSkill3">Skill 3:</label>
                        <Field name="petSkill3" />
                        {errors.petSkill3 && touched.petSkill3 ? (
                            <div>{errors.petSkill3}</div>
                        ) : null}
                        {errorsResponse?.petSkill3 && (
                            <div>{errorsResponse.petSkill3.message}</div>
                        )}
                        <button type="submit">Add Pet</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default PetForm;

