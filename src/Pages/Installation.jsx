import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installedApp,SetInstalledApp] = useState([])
    useEffect(()=>{
        const savedList =JSON.parse(localStorage.getItem('installed'))
        if (savedList) SetInstalledApp(savedList);
    },[])
    return (
        <div>
            <h1>Installation</h1>
        </div>
    );
};

export default Installation;