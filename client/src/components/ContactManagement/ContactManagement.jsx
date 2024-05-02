import React, { useEffect, useState } from 'react';
import LeftBar from '../Leftbar/LeftBar';
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';


const ContactManagement = () => {
    const [form, setForm]= useState([]);
// Fetching Form Data from Database //
useEffect(()=>{
    const fetching=(async()=>{
        const formData= await axios.get('http://management-system-g7rv.onrender.com/api/v1/form/getForm');
        setForm(formData.data.data);
    })() // IIFE Call
},[]);
// console.log(form);

    return (
        <div className='flex'>
            <div>
                <LeftBar/>
            </div>

            <div>
                <div className='flex justify-between mt-4'>
                    <div className='ml-20'>
                        <h1 className='text-3xl text-blue-600 font-semibold'>Contact Management</h1>
                    </div>
                    <div>
                        <div>
                        <input placeholder='Search' type="text" name="search" id="search" autoComplete="given-name" className="pr-32 pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>

                <div className='mt-12 ml-36 w-[900px]'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className=''>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {form.map((data, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'even:bg-gray-50 even:dark:bg-gray-800' : 'odd:bg-white odd:dark:bg-gray-900'} border-b dark:border-gray-700`}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {data.name}
                                    </th>
                                    <td className="px-6 py-4 text-gray-900">
                                        {data.phone}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        {data.email}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        <a href="#" className="flex font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <AiFillMessage className='text-2xl'/>
                                            <MdOutlineForwardToInbox className='text-2xl mx-2'/>
                                            <MdDelete className='text-2xl'/>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>

            </div>
        </div>
    );
};

export default ContactManagement;