/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import './modifActivity.scss';
import Sport from '../../images/Sport3.svg';

function ModifActivity({
    token,
}) {
    const [activity, setActivity] = useState({});
    const navigate = useNavigate();
    // Used params to add id to URL when sending an axios request
    let id = useParams();
    // Transformed result to number to match format set in the Back
    id = Number(id.id);
    const {
        register, handleSubmit, formState: { errors },
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

        },
    });

    // Request to API to get data for an Activity for placeholders
    const fetchActivity = async () => {
        try {
        const response = await axios.get(`https://actiively-back-zjty.onrender.com/api/v1/activity/${id}`);
        // Update states with results
        setActivity(response.data);
        }
        catch (error) {
        console.log(error);
        }
    };

    // Post request to update data
    const onSubmit = (data) => {
        axios
            .patch(
                `https://actiively-back-zjty.onrender.com/api/v1/organism/activity/${id}/edit`,
                data,
                {
                    headers: {
                        authorization: token,
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
                swal({
                    title: "L'activité a bien été modifiée !",
                    icon: 'success',
                  });
                setActivity(response.data);
            })
            .catch((error) => {
                console.log(error.data);
            });
        navigate(`/organism/activity/${id}`);
    };

    // useEffect so that data is fetched on mount
    useEffect(
         () => {
         fetchActivity();
        },
          [],
        );

    // Scroll to top when landing on page
    useEffect(() => {
         window.scrollTo(0, 0);
        }, []);

    return (

        <div className="container">

            <div className="container-image">
                <img
                    src={Sport}
                    alt="Sport"
                    className="image"
                />
            </div>
            <div className="container">
                <div className="container-form">
                    <div className="style_tit">
                        <h1 className="style_tit">Edit my activity</h1>
                    </div>

                    <form className="ui form container-form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="label-select">
                        <label className="label-form">
                                    Image URL
                        </label>
                                <input
                                    placeholder={activity.image_url}
                                    id="image_url"
                                    type="text"
                                    name="image_url"
                                    {...register('image_url')}
                                />
                    </div>

                    <div className="label-select">
                        <label className="label-form">
                                Description
                        </label>
                            <textarea
                                placeholder={activity.description}
                                id="description"
                                type="text"
                                name="description"
                                {...register('description')}
                            />
                    </div>

                    <div className="label-select">
                        <label className="label-form">
                                Address
                        </label>
                            <input
                                placeholder={activity.address}
                                id="address"
                                type="text"
                                name="address"
                                {...register('address', {
                                    minLength: {
                                        value: 3,
                                        message: '3 characters minimum',
                                    },
                                })}
                            />
                            {errors.address && <p className="errors">{errors.address.message}</p>}

                    </div>

                        <div className="label-select">
                        <label className="label-form">
                                City
                        </label>
                            <input
                                placeholder={activity.city}
                                id="city"
                                type="text"
                                name="city"
                                {...register('city', {
                                    minLength: {
                                        value: 3,
                                        message: '3 characters minimum',
                                    },
                                })}
                            />
                            {errors.city && <p className="errors">{errors.city.message}</p>}
                        </div>

                        <div className="label-select">
                            <label>
                                Zip code
                            </label>
                            <input
                                placeholder={activity.zip_code}
                                id="zip_code"
                                type="number"
                                name="zip_code"
                                {...register('zip_code', {
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
                                    {...register('day')}
                                >
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>

                                </select>
                        </label>

                        <label className="label-select">
                                Activity start time
                                <input
                                    id="start_time"
                                    placeholder={activity.start_time}
                                    type="text"
                                    name="start_time"
                                    {...register('start_time', {
                                        minLength: {
                                            value: 3,
                                            message: '3 characters minimum',
                                        },
                                    })}
                                />
                                {errors.start_time && <p className="errors">{errors.start_time.message}</p>}

                        </label>
                        <label className="label-select">
                                Activity end time
                                <input
                                    id="end_time"
                                    placeholder={activity.end_time}
                                    type="text"
                                    name="end_time"
                                    {...register('end_time', {
                                        minLength: {
                                            value: 3,
                                            message: '3 characters minimum',
                                        },
                                    })}
                                />
                                {errors.end_time && <p className="errors">{errors.end_time.message}</p>}
                        </label>
                        </div>
                        {' '}
                        <div className="label-select">
                    <label className="label-form">
                                Price
                    </label>
                            <input
                                placeholder={activity.price}
                                id="price"
                                type="number"
                                name="price"
                                {...register('price', {
                                    minLength: {
                                        value: 1,
                                        message: '1 character minimum',
                                    },
                                })}
                            />
                            {errors.price && <p className="errors">{errors.price.message}</p>}
                        </div>
                        <div className="label-select">
                            <label className="label-form">
                                Price type
                                <select
                                    id="price_type"
                                    {...register('price_type')}
                                >
                                    <option value="per session">per session</option>
                                    <option value="per month">per month</option>
                                    <option value="per year">per year</option>
                                    <option value="per semester">per semester</option>

                                </select>

                            </label>
                        </div>
                        <div className="label-select">
                            <label className="label-form">
                                Gender
                                <select
                                    id="gender"
                                    {...register('gender')}
                                >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Mixed">Mixed</option>

                                </select>
                            </label>
                        </div>
                            <div className="label-select">
                            <label className="label-select">
                                Level
                                <select
                                    id="level"
                                    {...register('level')}
                                >
                                    <option value="Beginner">Beginner</option>
                                    <option value="All levels">All levels</option>
                                    <option value="Experienced">Experienced</option>

                                </select>
                            </label>
                            </div>
                        <div className="field">
                            <Button
                                type="submit"
                                className="ui color1 button"
                            >
                                Edit

                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
ModifActivity.propTypes = {
    token: PropTypes.string.isRequired,
};

export default React.memo(ModifActivity);
