import React from 'react';
import notFound from '../assets/error-404.png'
import { NavLink } from 'react-router';

const NotFound = () => {
    return (
       <div className='flex flex-col justify-center items-center pt-20'>
            <img src={notFound} alt="" />
            <h1 className='text-5xl font-semibold py-6'>Oops, page not found!</h1>
            <p className='text-xl font-normal pb-6'>The page you are looking for is not available.</p>
            <NavLink to={'/'}><button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[16px]'>Go Back!</button></NavLink>
        </div>
    );
};

export default NotFound;