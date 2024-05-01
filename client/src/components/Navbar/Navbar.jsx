import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between align-middle  bg-blue-600 py-4'>
            <div className='ms-10 text-2xl font-bold text-white'>DEMO LOGO</div>

            <div className='me-10'>
            <input placeholder='Search' type="text" name="search" id="search" autoComplete="given-name" className="pr-32 pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
        </div>
    );
};

export default Navbar;