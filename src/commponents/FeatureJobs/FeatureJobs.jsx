import React, { useState }  from 'react';
import { useEffect } from 'react';
import './FeatureJobs.css'
import Job from '../Job/Job';
const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/itrabbi/fakedata-as9/main/fakedata.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <h2 className='title'>Featured Jobs</h2>
            <p className='sub-title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <br /><br /><br />
            <div className="jobs">
            {
              jobs.map(job => <Job
              key={job.id}
              job={job}
              ></Job>)
            }
            </div>
        </div>
    );
};

export default FeatureJobs;