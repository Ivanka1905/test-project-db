const Joi = require("joi");

const addOrderSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": `"" should be a type of string`,
    "string.empty": `"" must contain value`,
    "any.required": `"" is a required field`,
  }),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk"] },
    })
    .required()
    .messages({
      "string.base": `"" should be a type of string`,
      "string.empty": `"" must contain value`,
      "any.required": `"" is a required field`,
    }),
  phone: Joi.string().min(5).max(13).required().messages({
    "string.base": `"" should be a type of string`,
    "string.empty": `"" must contain value`,
    "any.required": `"" is a required field`,
  }),
  address: Joi.string().required().messages({
    "string.base": `"" should be a type of string`,
    "string.empty": `"" must contain value`,
    "any.required": `"" is a required field`,
  }),
  myOrder: Joi.object({
    totalPrice: Joi.number().required().messages({
      "any.required": `"" is a required field`,
    }),
    cafe: Joi.string(),
    order: Joi.array().items(
      Joi.object({
        food: Joi.string(),
        amount: Joi.number(),
        price: Joi.number(),
      })
    ),
  }),
  //   myOrder: Joi.array().items(
  //   Joi.object({
  //     food: Joi.string(),
  //     amount: Joi.number()
  //   })),
});

module.exports = {
  addOrderSchema,
};
