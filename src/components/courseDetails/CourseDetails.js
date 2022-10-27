import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
            <p>{courseDetails.course_name}</p>
                
        </div>
    );
};

export default CourseDetails;