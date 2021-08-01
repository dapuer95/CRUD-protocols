import { Application } from 'express';
import * as userController from '../controllers/user-controller';
import * as productController from '../controllers/products-controller';

const createRouteV1 = (app: Application): void => {
  app.get('/api/v1/users', userController.getUsers);
  app.get('/api/v1/users/:userId', userController.getUserById);
  app.get('/api/v1/products', productController.getProduct);
  app.get('/api/v1/products/:productId', productController.getProductById);
  app.post('/api/v1/products/create', productController.createProduct);
  app.put('/api/v1/products/:productId', productController.updateProduct);
  app.patch('/api/v1/products/:productId', productController.parcailUpdate);
  app.delete('/api/v1/products/:productId', productController.deleteProduct);
};

export default createRouteV1;
