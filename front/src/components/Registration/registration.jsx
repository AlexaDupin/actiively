/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Icon, Button } from 'semantic-ui-react';
import axios from 'axios';
import Sport from '../../images/Sport.svg';

import './registration.scss';
// signifier a l'utilisateur que son formulaire est bien envoyé

function Registration() {
  const navigate = useNavigate();

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone_number: '',
      contact_email: '',
      description: '',
    },
  });

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => {
    axios
      .post(
        'https://actiively-back-zjty.onrender.com/api/v1/organism/register',
        data,
      )
      .then((response) => {
        console.log(response.data);
        swal({
          title: 'Your organization was successfully created!',
          text: 'Please login.',
          icon: 'success',
        });
      })
      .catch((error) => {
        console.log(error.data);
      });
    navigate('/organism/profile');
  };

  return (
    <div className="container ">
      <div className="container-image">
        <img src={Sport} alt="Sport" className="image" />
      </div>
      <div className="container-form">

        <h1 className="container-title">Sign up</h1>

        <form className="ui form container-form" onSubmit={handleSubmit(onSubmit)}>

          <div className="field">
            <label className="label-form">
              Organization name
              <Icon disabled name="user" size="large" className="icon" />
            </label>
            <input
              placeholder="Name of your organization"
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

          <div className="field">
            <label>
              Login email
              <Icon disabled name="mail" size="large" className="icon" />
            </label>
            <input
              placeholder="Email to log into your account (private)"
              id="email"
              type="text"
              name="email"
              {...register('email', {
                required: 'This field is mandatory',
                pattern: {
                  value: /(.+)@(.+){2,}\.(.+){2,}/,
                  message: 'Invalid email address format',
                },
              })}
            />
          </div>
          {errors.email && <p className="errors">{errors.email.message}</p>}

          <div className="field">
            <label>
              Password
              <Icon disabled name="key" size="large" className="icon" />
            </label>
            <input
              placeholder="Your password"
              id="password"
              type="password"
              name="password"
              {...register('password', {
                required: 'A password is required',
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: 'Invalid format',
                },
                minLength: {
                  value: 3,
                  message: '3 characters minimum',
                },
              })}

            />
          </div>
          {errors.password && <p className="errors">{errors.password.message}</p>}
          <div className="field">
            <label>
              Confirm password
              <Icon disabled name="key" size="large" className="icon" />
            </label>
            <input
              placeholder="Confirm password"
              id="confirm_password"
              type="password"
              name="confirm_password"
              {...register('confirm_password', {
                validate: (value) => value === password.current || 'The passwords do not match',
              })}
            />
          </div>
          {errors.confirm_password && <p className="errors">{errors.confirm_password.message}</p>}
          <div className="field">
            <label>
              Phone number
              <Icon disabled name="phone" size="large" className="icon" />
            </label>
            <input
              placeholder="This phone number will be displayed publicly"
              id="phone_number"
              type="text"
              name="phone_number"
              {...register('phone_number', {
                required: 'This field is mandatory',
                pattern: {
                  value: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[\s.-]?[1-9](?:(?:[\s.-]?\d{1}){8}|\d{2}(?:[\s.-]?\d{3}){2})$/,
                  message: 'Invalid phone number format',
                },
              })}
            />
          </div>
          {errors.phone_number && <p className="errors">{errors.phone_number.message}</p>}

          <div className="field">
            <label>
              Contact email
              <Icon disabled name="mail" size="large" className="icon" />
            </label>
            <input
              placeholder="This email address will be displayed publicly"
              id="contact_email"
              type="text"
              name="contact_email"
              {...register('contact_email', {
                required: 'This field is mandatory',
                pattern: {
                  value: /(.+)@(.+){2,}\.(.+){2,}/,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          {errors.contact_email && <p className="errors">{errors.contact_email.message}</p>}

          <div className="field">
            <label>
              Description
              <Icon disabled name="pencil" size="large" className="icon" />
            </label>
            <textarea
              placeholder="Desbribe your organization in a few words"
              id="description"
              type="text"
              name="
              description"
              {...register('description', {
                required: 'This field is mandatory',
              })}
            />
          </div>
          {errors.contact_email && <p className="errors">{errors.contact_email.message}</p>}

          <div className="field">
            <Button
              type="submit"
              className="ui color1 button"
            >
              Send

            </Button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default React.memo(Registration);
