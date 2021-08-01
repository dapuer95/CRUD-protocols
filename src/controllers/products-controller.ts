import { Request, Response } from 'express';
import { Product, products } from '../data/products';

const getProduct = (req: Request, res: Response): void => {
  res.send(products);
};

const getProductById = (req: Request, res: Response): void => {
  const id = Number(req.params.productId);
  const uniqueProduct = products.filter((item) => item.id === id);
  if (uniqueProduct.length !== 0) {
    res.send(uniqueProduct);
  } else {
    res.status(404).send('No existe el usuario');
  }
};

const createProduct = (req: Request, res: Response): void => {
  const { name, year, color, pantone_value } = req.body;
  const newProduct: Product = {
    id: products.length + 1,
    name,
    year,
    color,
    pantone_value,
  };
  products.push(newProduct);
  res.send(products);
};

const updateProduct = (req: Request, res: Response): void => {
  const { name, year, color, pantone_value } = req.body;
  const id = Number(req.params.productId);
  const index = products.findIndex((item) => item.id === id);
  products[index] = {
    id,
    name,
    year,
    color,
    pantone_value,
  };
  res.send(products);
};

const parcailUpdate = (req: Request, res: Response): void => {
  const id = Number(req.params.productId);
  const index = products.findIndex((item) => item.id === id);
  const product: Product = products[index];
  const { name, year, color, pantone_value } = req.body;
  products[index] = {
    id,
    name: name || product.name,
    year: year || product.year,
    color: color || product.color,
    pantone_value: pantone_value || product.pantone_value,
  };
  res.send(products);
};

const deleteProduct = (req: Request, res: Response): void => {
  const id = Number(req.params.productId);
  const index = products.findIndex((item) => item.id === id);
  if (index > -1) {
    const list = products.filter((item) => item.id !== id);
    res.send(list);
  } else {
    res.status(404).send('No existe el usuario');
  }
};

export {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  parcailUpdate,
  deleteProduct,
};
