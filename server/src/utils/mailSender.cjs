const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')
const pdfTemplate = require('../pdfTemplate/pdfTemplate.cjs')
const pdf = require('html-pdf');

// Creating PDF //
exports.creatingPdf= async(req, res)=>{
    const htmlContent = pdfTemplate(req.body);
    const filePath = path.resolve(__dirname, 'public', 'temp', 'form.pdf');

    const createdPdf= pdf.create(htmlContent).toFile(filePath, (err) => {
        if(err){
            throw new Error("Something Wrong while creating the PDF!!!")
        }
        return res
        .status(200)
        .json({message:"PDF Generated Successfully"})
    })

    return createdPdf;
}

// Sending Mail to email //
exports.mailSender =async()=>{
    try {
        const parentDir = path.resolve(__dirname, 'public', 'temp');
        const pathToAttachment = path.join(parentDir, 'form.pdf');
        const attachment = fs.readFileSync(pathToAttachment).toString('base64');
    
        let transport = nodemailer.createTransport({
            tls:{rejectUnauthorized: false},
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS
            }
        })
    
        await transport.sendMail({
            from: "tasnimrumman@gmail.com",
            to: 'promemahazabin@gmail.com',
            subject:'User Contact Form',
            html:`
            Pdf Generate document from user, Thanks.`,
            attachments:[
                {
                    content:attachment,
                    filename:'form.pdf',
                    contentType: 'application/pdf',
                    path:pathToAttachment
                }
            ]
        })

        fs.unlinkSync(pathToAttachment); //Remove local save temporary file after upload//

    } 
    catch (error) {
        throw new Error(error.message);
    }
}