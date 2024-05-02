import express from 'express'
import cors from 'cors';


const app= express();

// app.use(cors());

app.use(cors(
    {
    origin: ["https://management-system-alpha.vercel.app"],
    method: ["POST", "GET"],
    credentials: true
    }
));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


// All Routes //
import pdfRoute from './routes/pdfRoute.js';

app.use('/api/v1/form', pdfRoute);


export default app;