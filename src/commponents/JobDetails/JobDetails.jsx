import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const sd = useLoaderData();
    console.log(sd)

    return (
        <div>
            {/* <h2> rft {job.name + "gc"}</h2> */}
            <h2>not work {sd.name}</h2>
    
        </div>
    );
};

export default JobDetails;