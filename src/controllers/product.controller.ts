import { Request, Response, NextFunction } from 'express';
import { productSchema } from '../schemas';

/**
 * @route POSt /product/add
 */
const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    productSchema.validate(req.body);
    console.log(req.body);
    res.status(200).json({ message: 'Product successfully added' });
  } catch (error) {
    next(error);
  }
};

export default {
  addProduct,
};
