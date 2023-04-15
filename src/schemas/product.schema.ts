import Joi from 'joi';

const productSchema = Joi.object({
  /* prettier-ignore */
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  /* prettier-ignore */
  code: Joi.string()
    .min(3)
    .max(30)
    .required(),
  /* prettier-ignore */
  price: Joi.number()
    .integer()
    .min(1)
    .max(999999)
    .required(),
  /* prettier-ignore */
  description: Joi.number()
    .integer()
    .min(1)
    .max(999999)
    .required(),
});

export default productSchema;
