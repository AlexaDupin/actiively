/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sport from '../../images/Sport.svg';
import './createActivity.scss';
// label pour le menu déroulant pour le type d'activité
function CreateActivity({
    token,
}) {
    const navigate = useNavigate();
    const {
        register, handleSubmit, formState: {
            errors, isSubmitSuccessful,
        },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            address: '',
            zip_code: '',
            city: '',
            price: '',
            price_type: '',
            gender: '',
            level: '',
            day: '',
            start_time: '',
            end_time: '',
            image_url: '',
        },
    });
    // const onSubmit = (data) => console.log(data);
    /* const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image_url', data.image_url[0]);
        const res = await fetch('http://localhost:5000/upload-file', {
            method: 'POST',
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(${res.message}, status: ${res.status}));
    }; */
    const onSubmit = (data) => {
        console.log('data:', data);
        axios
            .post(
                'http://localhost:3001/api/v1/organism/create',
                data,
                {
                    headers: {
                        authorization: token,
                    },
                },
            )
            .then((response) => {
                console.log('response:', response.data);
            })
            .catch((error) => {
                console.log(error.data);
            });
        navigate('/organism/activities');
    };

return (
        <div className="container">
            <div className="container-image">
                <img src={Sport} alt="Sport" className="image" />
            </div>
            <div className="container-form">
                <h1 className="container-title">Créer une activité</h1>
                <Form success className="ui form container-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label className="label-form">
                            image URL
                        </label>
                        <input
                            placeholder="URL de votre image préférée"
                            id="image_url"
                            type="url"
                            name="image_url"
                            {...register('image_url', {
                                required: 'Ce champ est obligatoire',
                            })}
                        />
                    </div>
                    <div className="field">
                        <label className="label-form">
                            Nom de l activité :
                        </label>
                        <input
                            placeholder="les sbires de Gul'dan"
                            id="name"
                            type="text"
                            name="name"
                            {...register('name', {
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.name && <p className="errors">{errors.name.message}</p>}
                    <div className="field">
                        <label>
                            Description
                        </label>
                        <textarea
                            placeholder="Ma super association..."
                            id="description"
                            type="text"
                            name="
              description"
                            {...register('description')}
                        />
                    </div>
                    <div className="field">
                        <label className="label-form">
                            Adresse
                        </label>
                        <input
                            placeholder="123 royaume de Lordaeron"
                            id="address"
                            type="text"
                            name="address"
                            {...register('address', {
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.address && <p className="errors">{errors.address.message}</p>}
                    <div className="field">
                        <label className="label-form">
                            ville
                        </label>
                        <input
                            placeholder="Lyon"
                            id="city"
                            type="text"
                            name="city"
                            {...register('city', {
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.city && <p className="errors">{errors.city.message}</p>}
                    <div className="field">
                        <label className="label-form">
                            Code postal
                        </label>
                        <input
                            placeholder="01000"
                            id="zip_code"
                            type="number"
                            name="zip_code"
                            {...register('zip_code', {
                                required: 'Ce champ est obligatoire',
                                pattern: {
                                    value: /^[0-9]{5}$/,
                                    message: 'format code postal invalide',
                                },
                            })}
                        />
                        {errors.zip_code && <p className="errors">{errors.zip_code.message}</p>}
                    </div>
                    <div className="field">
                        <label className="label-day">
                            jour de l activité :
                            <select
                                {...register('day', { required: 'Ces champs sont obligatoire' })}
                            >
                                <option value="Lundi">Lundi</option>
                                <option value="Mardi">Mardi</option>
                                <option value="Mercredi">Mercredi</option>
                                <option value="Jeudi">Jeudi</option>
                                <option value="Vendredi">Vendredi</option>
                                <option value="Samedi">Samedi</option>
                                <option value="Dimanche">Dimanche</option>
                            </select>
                            {errors.day && <p className="errors">{errors.day.message}</p>}
                        </label>
                        <label className="label-day">
                            heure de départ de l activité :
                            <input
                                placeholder="heure de début de l'activité"
                                type="text"
                                name="start_time"
                                {...register('start_time', {
                                    required: 'Ce champ est obligatoire',
                                })}
                            />
                            {errors.start_time && <p className="errors">{errors.start_time.message}</p>}
                        </label>
                        <label className="label-day">
                            heure de fin de l activité :
                            <input
                                placeholder="heure de fin de l'activité"
                                type="text"
                                name="end_time"
                                {...register('end_time', {
                                    required: 'Ce champ est obligatoire',
                                    minLength: {
                                        value: 3,
                                        message: '3 caractères minimum',
                                    },
                                })}
                            />
                            {errors.end_time && <p className="errors">{errors.end_time.message}</p>}
                        </label>
                    </div>
                    <div className="field">
                        <label className="label-form">
                            Tarif
                        </label>
                        <input
                            placeholder="1 euro ca mange pas de pain"
                            id="price"
                            type="number"
                            name="price"
                            {...register('price', {
                                required: 'Ce champ est obligatoire',
                            })}
                        />
                        {errors.price && <p className="errors">{errors.price.message}</p>}
                    </div>
                    <div className="field">
                        <label className="label-form">
                            Type de tarif
                            <select
                                {...register('price_type', { required: 'Ce champ est obligatoire' })}
                            >
                                <option value="price_type">la séance</option>
                                <option value="price_type">par mois</option>
                                <option value="price_type">par an</option>
                                <option value="price_type">par trimestre</option>
                            </select>
                            {errors.price_type && <p className="errors">{errors.price_type.message}</p>}
                        </label>
                    </div>
                    <div className="field">
                        <label className="label-form">
                            <select
                                {...register('gender', { required: 'les 2 champs sont obligatoires' })}
                            >
                                <option value="Masculin">Masculin</option>
                                <option value="Féminin">Féminin</option>
                                <option value="Mixte">Mixte</option>
                            </select>
                        </label>
                        <label className="label-form">
                            <select
                                {...register('level', { required: 'les 2 champs sont obligatoires' })}
                            >
                                <option value="Débutant">Débutant</option>
                                <option value="Tous niveaux">Tous niveaux</option>
                                <option value="Confirmé">Confirmé</option>
                            </select>
                        </label>
                        {errors.gender && <p className="errors">{errors.gender.message}</p>}
                    </div>
                    <div className="field">
                        <Button
                            type="submit"
                            className="ui color1 button"
                        >
                            Créer
                        </Button>
                    </div>
                    {isSubmitSuccessful.form && <p className="errors">{isSubmitSuccessful.form.message}</p>}
                </Form>
            </div>
        </div>
    );
}

CreateActivity.propTypes = {
    token: PropTypes.string.isRequired,
};
export default React.memo(CreateActivity);
