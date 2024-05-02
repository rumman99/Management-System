import React, { useState } from 'react';
import image from "../../assets/image.png"
import axios from 'axios';


const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const data = {name, email, phone, message};

    const submitForm = async(e)=>{
        e.preventDefault();

        try {
            await axios.post("https://management-system-alpha.vercel.app/api/v1/form/createForm", data);

            // Creating PDF Api call
            await axios.post('https://management-system-alpha.vercel.app/api/v1/form/createPdf', data);
            // Sending PDF to mail
            const sendPdfResponse = await axios.post("https://management-system-alpha.vercel.app/api/v1/form/sendPdfToMail");

            alert(sendPdfResponse.data);
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    }

    return (
        <div className='mt-8 flex justify-around'>
            <div>
            <h1 className='text-5xl font-semibold'>Contact Us</h1>
                <div className="mt-10 grid grid-cols-1 gap-x-6">
                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input onChange={(e)=>setName(e.target.value)} placeholder='Name' type="text" name="name" id="name" autoComplete="given-name" className="pl-5 rounded-full block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                </div>

                <div className="mt-2 grid grid-cols-1 gap-x-6">
                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="text" name="email" id="email" autoComplete="given-name" className="pl-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                </div>

                <div className="mt-2 grid grid-cols-1 gap-x-6">
                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' type="number" name="phone" id="phone" autoComplete="given-name" className="pl-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                </div>

                <div className="">
                    <div className="sm:col-span-3">
                    <div className="mt-4">
                        <textarea onChange={(e)=>setMessage(e.target.value)} placeholder='Message' type="text" name="message" id="message" autoComplete="given-name" className="pl-5 rounded-xl block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <button onClick={submitForm} className="px-32 py-3 mt-6 text-white font-semibold rounded-full bg-blue-600 hover:bg-blue-800">Send Message</button>
                </div>
            </div>

            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Form;