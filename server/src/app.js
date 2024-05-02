import express from 'express'
import cors from 'cors';


const app= express();

app.use(cors({
    origin: 'https://management-system-alpha.vercel.app'
}));

app.use(express.json());


// All Routes //
import pdfRoute from './routes/pdfRoute.js';

app.use('/api/v1/form', pdfRoute);


export default app;