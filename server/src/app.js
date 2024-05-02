import express from 'express'
import cors from 'cors';


const app= express();

app.use(express.json({limit:"20kb"}));
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN, 
        credentials: true
    }
));
app.use(express.urlencoded({extended: true, limit:"20kb"}));

// All Routes //
import pdfRoute from './routes/pdfRoute.js';

app.use('/api/v1/form', pdfRoute);


export default app;