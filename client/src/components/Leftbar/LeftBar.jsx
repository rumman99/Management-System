import React from 'react';
import logo from "../../../public/logo.jpg"
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';


const LeftBar = () => {
    return (
        <div className='w-[300px]'>
            <div className='bg-gray-500/20 h-screen'>
                <div className='flex justify-center items-center'>
                    <img className='w-28' src={logo} alt="" />
                </div>

                <div className='mt-10'>
                <Link to={'/contact-management'} className='flex justify-center items-center mt-10'>
                    <FaEnvelope className='text-2xl mr-2'/>
                    <p className='text-blue-700'>Contact Management</p>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;