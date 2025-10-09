import React from 'react';
import Header from '../Components/Header/Header';
import TrendingApps from '../Components/Apps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const topApps =useLoaderData();
    console.log(topApps);
    
    return (
        <div>
            <Header></Header>
            <TrendingApps topApps={topApps}></TrendingApps>
        </div>
    );
};

export default Home;