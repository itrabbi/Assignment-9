import React from 'react';
import './Job.css'
import { BiMap, BiDollarCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Job = (props) => {
    const { name, img, title, sub_address, salary, button_llx, button_fulltime ,id } = props.job;
    console.log(props.job)
    return (
        <div className='job'>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{name}</p>
            <div>
                <button>{button_llx}</button>
                <button>{button_fulltime}</button>
            </div>
            <p> <BiMap /> {sub_address}</p>
            <p> <BiDollarCircle /> Salary:  {salary}</p>
            <p><Link to={`/job/${id}`}>show me</Link></p>
        </div>
    );
};

export default Job;