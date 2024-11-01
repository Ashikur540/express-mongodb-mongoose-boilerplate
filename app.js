

import cors from 'cors';
import dotenv from 'dotenv';
import Express from 'express';
import productRoutes from './routes/products.route.js';
dotenv.config()



const app = Express();

// place your middlewares here

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors());



// define the routes of your application here
app.use('/api/v1/products', productRoutes);


export default app