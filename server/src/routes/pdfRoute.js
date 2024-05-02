import { Router } from "express";
import { createForm, createPdf, gettingFormData, sendPdfToMail } from "../controllers/pdfController.js";




const router = Router();

router.route('/createForm').post(createForm); // creating form entry in DB

router.route('/getForm').get(gettingFormData); // Getting All Form Data

router.route('/createPdf').post(cors(), createPdf); // to generate PDF

router.route('/sendPdfToMail').post(sendPdfToMail); // Send PDF to Emails

export default router;