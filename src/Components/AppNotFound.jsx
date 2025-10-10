import React from 'react';
import noAppFound from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const AppNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-20'>
            <img src={noAppFound} alt="" />
            <h1 className='text-5xl font-semibold py-6'>OPPS!! APP NOT FOUND</h1>
            <p className='text-xl font-normal pb-6'>The App you are requesting is not found on our system.  please try another apps</p>
            <NavLink to={'/'}><button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[16px]'>Go Back!</button></NavLink>
        </div>
    );
};

export default AppNotFound;