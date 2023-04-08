import { Request, Response, NextFunction } from 'express';

/**
 * @route POSt /product/add
 */
const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Product successfully added' });
  } catch (error) {
    next(error);
  }
};

export default {
  addProduct,
};
