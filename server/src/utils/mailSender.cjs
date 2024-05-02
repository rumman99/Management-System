const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')

// Sending Mail to email //
exports.mailSender =async(req, res)=>{
    try {
        const parentDir = path.resolve(__dirname, '../../pdf/');
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
            to: 'test@nusaiba.com.bd',
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