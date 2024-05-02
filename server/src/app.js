import express from 'express'
import cors from 'cors';


const app= express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(".src/public"));


// All Routes //
import pdfRoute from './routes/pdfRoute.js';

app.use('/api/v1/form', pdfRoute);


export default app;