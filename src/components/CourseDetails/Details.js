import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const courseDetails =useLoaderData();
    const {rating,students,course_name,image_url,details} = courseDetails;

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 ">
            <h1 className='text-center font-bold text-2xl py-5 underline'>Your Chack Out Page</h1>
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 shadow-lg">
		<span rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<div className='object-cover w-full h-auto rounded sm:h-96 lg:col-span-7 dark:bg-gray-500'>
            <img src={image_url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" /> <br />
       
            </div>
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline ">{course_name}</h3>
				<span className="text-md font-bold text-red-500 dark:text-gray-400">Students Total : {students}</span>
				<p>{details}</p>
                  <div className='flex justify-between items-center                  '>
                    <p className='text-amber-500 font-bold'> Ratings {rating.number}</p>
                    <p className='text-cyan-800 font-bold'> Badge {rating.badge}</p>

                  </div>
                  <button className='btn w-full'> Enroll Now Processed</button>
                  

			</div>
		</span>
	</div>
</section>
    );
};

export default Details;