import { asyncHandler } from "../utils/AsyncHandler.js";
import pdf from "html-pdf";
import path from "path";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import pdfTemplate from "../pdfTemplate/pdfTemplate.js"
import nodemailer from "nodemailer"
import fs from "fs"
import { mailSender } from "../utils/mailSender.cjs";
import { Form } from "../models/formModel.js";


// Create Form //
const createForm= asyncHandler(async(req, res)=>{
    const {name, email, message} = req.body;
    const formCreated = await Form.create({name, email, message});

    if(formCreated){
        return res.status(201).json(new ApiResponse(200, formCreated, "Form Created Successfully"));
    }
    else{
        throw new ApiError(500, "Something Went Wrong When Creating the Form!!!!")
    }
});

// to generate PDF
const createPdf = asyncHandler(async(req, res)=>{
    const htmlContent = pdfTemplate(req.body);

    pdf.create(htmlContent).toFile('form.pdf', (err) => {
        if(err){
            throw new ApiError(500, "Something Wrong while creating the PDF!!!")
        }
        return res
        .status(200)
        .json(new ApiResponse(200, "PDF Generated Successfully"))
    })
});

// send PDF to email
const sendPdfToMail= asyncHandler(async(req, res)=>{
    // Sending Mail Through NodeMailer
    try {
        // Calling sendMail function //
        mailSender()

        res.send("Mail has been sent to your email. Check your mail");

    } catch (error) {
        throw new ApiError(400, "Something Happened when sending mail");
    }
});

export {createPdf, sendPdfToMail, createForm};