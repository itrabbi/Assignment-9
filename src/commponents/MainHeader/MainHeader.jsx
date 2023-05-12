import React from 'react';
import './MainHeader.css'
import mainImg from '../../assets/All Images/P3OLGJ1 copy 1.png'
import Category from '../Category/Category';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
const MainHeader = () => {
    return (
        <>
        <div className='main-header'>
            <div className='header-details'>
            <h1>One Step Closer To Your <span>Dream Job</span></h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button>Get Started</button>
            </div>
            <div className="header-img">
                <img src={mainImg} alt="" />
            </div>
        </div>
        <br /><br />
        <Category></Category>
        <br /><br /><br />
        <FeatureJobs></FeatureJobs>
        </>
    );
};

export default MainHeader;