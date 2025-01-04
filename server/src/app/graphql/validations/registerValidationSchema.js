const Joi = require('joi');

const registerValidationSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required().messages({
        'string.base': 'First name must be a string',
        'string.empty': 'First name cannot be empty',
        'string.min': 'First name must be at least 2 characters',
        'any.required': 'First name is required',
    }),
    lastName: Joi.string().min(2).max(50).required().messages({
        'string.base': 'Last name must be a string',
        'string.empty': 'Last name cannot be empty',
        'string.min': 'Last name must be at least 2 characters',
        'any.required': 'Last name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Invalid email format',
        'string.empty': 'Email cannot be empty',
        'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).max(128).required().messages({
        'string.min': 'Password must be at least 6 characters',
        'string.max': 'Password cannot exceed 128 characters',
        'any.required': 'Password is required',
    }),
});

module.exports = registerValidationSchema;