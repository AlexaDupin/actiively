/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
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

    const onSubmit = (data) => {
        // console.log('data:', data);
        axios
            .post(
                `${process.env.REACT_APP_BASE_URL}/organism/create`,
                data,
                {
                    headers: {
                        authorization: token,
                    },
                },
            )
            .then((response) => {
                // console.log('response of create:', response.data);
                if (response.data.error) {
                    swal({
                        title: 'The activity must have a unique name.',
                        icon: 'error',
                      });
                }
                else {
                    swal({
                    title: 'The activity has been created successfully!',
                    icon: 'success',
                  });
                }
            })
            .catch((error) => {
                console.log(error.data);
            });
        navigate('/organism/activities');
    };

    // Scroll to top when landing on page
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

return (
        <div className="container">
            <div className="container-image">
                <img src={Sport} alt="Sport" className="image" />
            </div>
            <div className="container-form">
                <h1 className="container-title">Create an activity</h1>
                <Form success className="ui form container-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="label-select">
                        <label className="label-form">
                            Image URL
                        </label>
                        <input
                            placeholder="URL of the image associated with your activity"
                            id="image_url"
                            type="url"
                            name="image_url"
                            {...register('image_url', {
                                required: 'This field is mandatory',
                            })}
                        />
                    </div>
                    {errors.name && <p className="errors">{errors.name.message}</p>}

                    <div className="label-select">
                        <label className="label-form">
                            Activity name
                        </label>
                        <input
                            placeholder="ex. Tennis lessons for beginners"
                            id="name"
                            type="text"
                            name="name"
                            {...register('name', {
                                required: 'This field is mandatory',
                                minLength: {
                                    value: 3,
                                    message: '3 characters minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.name && <p className="errors">{errors.name.message}</p>}
                    <div className="label-select">
                        <label className="label-form">
                            Description
                        </label>
                        <textarea
                            placeholder="Describe this activity in a few words"
                            id="description"
                            type="text"
                            name="description"
                            {...register('description', {
                                required: 'This field is mandatory',
                            })}
                        />
                    </div>
                    {errors.name && <p className="errors">{errors.name.message}</p>}
                    <div className="label-select">
                        <label className="label-form">
                            Address
                        </label>
                        <input
                            placeholder="Address where the activity takes place"
                            id="address"
                            type="text"
                            name="address"
                            {...register('address', {
                                required: 'This field is mandatory',
                                minLength: {
                                    value: 3,
                                    message: '3 characters minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.address && <p className="errors">{errors.address.message}</p>}
                    <div className="label-select">
                        <label className="label-form">
                            City
                        </label>
                        <input
                            placeholder="City where the activity takes place"
                            id="city"
                            type="text"
                            name="city"
                            {...register('city', {
                                required: 'This field is mandatory',
                                minLength: {
                                    value: 3,
                                    message: '3 characters minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.city && <p className="errors">{errors.city.message}</p>}
                    <div className="label-select">
                        <label>
                            ZIP code
                        </label>
                        <input
                            placeholder="ZIP code"
                            id="zip_code"
                            type="number"
                            name="zip_code"
                            {...register('zip_code', {
                                required: 'This field is mandatory',
                                pattern: {
                                    value: /^[0-9]{5}$/,
                                    message: 'Invalid zip code format',
                                },
                            })}
                        />
                        {errors.zip_code && <p className="errors">{errors.zip_code.message}</p>}
                    </div>
                    <div className="field">
                    <label className="label-select">
                            Day of the activity
                            <select
                                id="day"
                                {...register('day', { required: 'Those fields are mandatory' })}
                            >
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                            {errors.day && <p className="errors">{errors.day.message}</p>}
                        </label>

                        <label className="label-select">
                            Start time of the activity
                            <input
                                id="start_time"
                                placeholder="Time when the activity starts"
                                type="text"
                                name="start_time"
                                {...register('start_time', {
                                    required: 'This field is mandatory',
                                })}
                            />
                            {errors.start_time && <p className="errors">{errors.start_time.message}</p>}
                        </label>
                        <label className="label-select">
                            End time of the activity
                            <input
                                id="end_time"
                                placeholder="Time when the activity ends"
                                type="text"
                                name="end_time"
                                {...register('end_time', {
                                    required: 'This field is mandatory',
                                    minLength: {
                                        value: 3,
                                        message: '3 characters minimum',
                                    },
                                })}
                            />
                            {errors.end_time && <p className="errors">{errors.end_time.message}</p>}
                        </label>
                    </div>
                    <div className="label-select">
                    <label className="label-form">
                            Price
                        </label>
                        <input
                            placeholder="How much the activity costs"
                            id="price"
                            type="number"
                            name="price"
                            {...register('price', {
                                required: 'This field is mandatory',
                            })}
                        />
                        {errors.price && <p className="errors">{errors.price.message}</p>}
                    </div>
                    <div className="label-select">
                    <label className="label-form">
                            Type of price
                            <select
                                id="price_type"
                                {...register('price_type', { required: 'This field is mandatory' })}
                            >
                                <option value="per session">per session</option>
                                <option value="per month">per month</option>
                                <option value="per year">per year</option>
                                <option value="per semester">per semester</option>
                            </select>
                            {errors.price_type && <p className="errors">{errors.price_type.message}</p>}
                        </label>
                    </div>
                    <div className="label-select">
                    <label className="label-form">
                            Gender
                            <select
                                id="gender"
                                {...register('gender', { required: 'Both fields are mandatory' })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="mixed">Mixed</option>
                            </select>
                        </label>
                        </div>
                         <div className="label-select">
                        <label className="label-select">
                            Level
                            <select
                                id="level"
                                {...register('level', { required: 'Both fields are mandatory' })}
                            >
                                <option value="beginner">Beginner</option>
                                <option value="allLevels">All levels</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </label>
                        {errors.gender && <p className="errors">{errors.gender.message}</p>}
                    </div>
                    <div className="field">
                        <Button
                            type="submit"
                            className="ui color1 button"
                        >
                            Create
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
