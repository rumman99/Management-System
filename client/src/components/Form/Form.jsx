import React from 'react';
import image from "../../../public/image.png"

const Form = () => {
    return (
        <div className='mt-8 flex justify-around'>
            <div>
            <h1 className='text-5xl font-semibold'>Contact Us</h1>
                <div className="mt-10 grid grid-cols-1 gap-x-6">
                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input placeholder='Name' type="text" name="name" id="name" autoComplete="given-name" className="pl-5 rounded-full block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                </div>

                <div className="mt-2 grid grid-cols-1 gap-x-6">
                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input placeholder='Email' type="text" name="name" id="name" autoComplete="given-name" className="pl-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                </div>

                <div className="">
                    <div className="sm:col-span-3">
                    <div className="mt-4">
                        <textarea placeholder='Message' type="text" name="name" id="name" autoComplete="given-name" className="pl-5 rounded-xl block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <button className="px-32 py-3 mt-6 text-white font-semibold rounded-full bg-blue-600 hover:bg-blue-800">Save Changes</button>
                </div>
            </div>

            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Form;