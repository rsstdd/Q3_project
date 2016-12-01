'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    email: Joi.string()
      .label('Email')
      .required()
      .email()
      .trim(),

    password: Joi.string()
      .label('Password')
      .required()
      .trim()
      .min(8),

    firstName: Joi.string()
      .label('First Name')
      .required()
      .trim(),

    lastName: Joi.string()
      .label('Last Name')
      .required()
      .trim(),

    age: Joi.number()
      .label('Age')
      .required()
      .integer()
      .min(1990),

    country: Joi.string()
      .label('Country')
      .required()
      .trim(),

    bio: Joi.string()
      .label('Bio')
      .required()
      .trim(),

    imgUrl: Joi.string()
      .label('avatarUrl')
      .required()
      .trim()
  }
};
