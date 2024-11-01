import express from 'express';
import { addNewProduct, getAllProducts, getProductById } from '../controllers/products.controller.js';
//  import middlewares to protect routes

const productRoutes = express.Router()

// declare your routes here
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", addNewProduct);


export default productRoutes;