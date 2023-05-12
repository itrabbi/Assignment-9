import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <FeatureJobs></FeatureJobs> */}
        </div>
    );
};

export default Home;