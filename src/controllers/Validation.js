const Joi = require('@hapi/joi');

//regis
const regisValidate = data => {
    const schema =Joi.object({
        name: Joi.string()
        .min(6)
        .required(),
        email: Joi.string()
        .min(6)
        .required().email(),
        password: Joi.string()
        .min(6)
        .required(),
        phone: Joi.string()
        .min(10)
        .required(),
        address: Joi.string()
        .min(6)
        .required(),
    })
    return validation = schema.validate(data)
};

const loginValidate = data => {
    const schema =Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    })
    return validation = schema.validate(data)
};

module.exports.regisValidate = regisValidate;
module.exports.loginValidate = loginValidate;