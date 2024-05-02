import express from 'express'
import cors from 'cors';


const app= express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// All Routes //
import pdfRoute from './routes/pdfRoute.js';

app.use('/api/v1/form', pdfRoute);


export default app;