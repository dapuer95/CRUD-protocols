"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.parcailUpdate = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProduct = void 0;
const products_1 = require("../data/products");
const getProduct = (req, res) => {
    res.send(products_1.products);
};
exports.getProduct = getProduct;
const getProductById = (req, res) => {
    const id = Number(req.params.productId);
    const uniqueProduct = products_1.products.filter((item) => item.id === id);
    if (uniqueProduct.length !== 0) {
        res.send(uniqueProduct);
    }
    else {
        res.status(404).send('No existe el usuario');
    }
};
exports.getProductById = getProductById;
const createProduct = (req, res) => {
    const { name, year, color, pantone_value } = req.body;
    const newProduct = {
        id: products_1.products.length + 1,
        name,
        year,
        color,
        pantone_value,
    };
    products_1.products.push(newProduct);
    res.send(products_1.products);
};
exports.createProduct = createProduct;
const updateProduct = (req, res) => {
    const { name, year, color, pantone_value } = req.body;
    const id = Number(req.params.productId);
    const index = products_1.products.findIndex((item) => item.id === id);
    products_1.products[index] = {
        id,
        name,
        year,
        color,
        pantone_value,
    };
    res.send(products_1.products);
};
exports.updateProduct = updateProduct;
const parcailUpdate = (req, res) => {
    const id = Number(req.params.productId);
    const index = products_1.products.findIndex((item) => item.id === id);
    const product = products_1.products[index];
    const { name, year, color, pantone_value } = req.body;
    products_1.products[index] = {
        id,
        name: name || product.name,
        year: year || product.year,
        color: color || product.color,
        pantone_value: pantone_value || product.pantone_value,
    };
    res.send(products_1.products);
};
exports.parcailUpdate = parcailUpdate;
const deleteProduct = (req, res) => {
    const id = Number(req.params.productId);
    const index = products_1.products.findIndex((item) => item.id === id);
    if (index > -1) {
        const list = products_1.products.filter((item) => item.id !== id);
        res.send(list);
    }
    else {
        res.status(404).send('No existe el usuario');
    }
};
exports.deleteProduct = deleteProduct;
