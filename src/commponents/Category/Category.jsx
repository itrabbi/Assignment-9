import React from 'react';
import './Category.css'
import acounts from '../../assets/Icons/accounts 1.png'
import buisnes from '../../assets/Icons/business 1.png'
import marketing from '../../assets/Icons/social-media 1.png'
import chip from '../../assets/Icons/chip 1.png'
const Category = () => {
    return (
        <div className='category'>
            <h2 className='title'>Job Category List</h2>
            <p className='sub-title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <br /><br /><br />
            <div className="list-category">
                <div className='singale-category'>
                    <img src={acounts} alt="" />
                    <h4>Account & Finance</h4>
                    <p><small>300+ Jobs Available</small></p>
                </div>
                <div className='singale-category'>
                    <img src={buisnes} alt="" />
                    <h4>Creative Design</h4>
                    <p><small>100+ Jobs Available</small></p>
                </div>
                <div className='singale-category'>
                    <img src={marketing} alt="" />
                    <h4>Marketing & Sales</h4>
                    <p><small>140+ Jobs Available</small></p>
                </div>
                <div className='singale-category'>
                    <img src={chip} alt="" />
                    <h4>Engineering Job</h4>
                    <p><small>224+ Jobs Available</small></p>
                </div>
            </div>
        </div>
    );
};

export default Category;