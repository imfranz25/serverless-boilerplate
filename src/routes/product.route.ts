/* 3rd Party Module(s) */
import { Router } from 'express';
import { productController } from '../controllers';

const productRouter: Router = Router();

// prettier-ignore
productRouter
  .route('/add')
  .post(productController.addProduct);

export default productRouter;
