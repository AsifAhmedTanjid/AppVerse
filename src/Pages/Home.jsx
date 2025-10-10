import React from 'react';
import Header from '../Components/Header/Header';
import TrendingApps from '../Components/Apps/TrendingApps';

import useApps from '../Hooks/useApps';

const Home = () => {
    // const AllApps =useLoaderData();
    const {AllApps,loading,error}=useApps();

    // console.log(AllApps);
    
    return (
        <div>
            <Header></Header>
            <TrendingApps AllApps={AllApps}></TrendingApps>
        </div>
    );
};

export default Home;