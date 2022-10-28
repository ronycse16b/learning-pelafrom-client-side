import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';



const CourseCategory = () => {
    const category = useLoaderData();
    const { image_url, course_name, details, rating, students, _id } = category
    return (
        <div>


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-lg lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <img
                            src={image_url}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                        <small>{students}</small>
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            {course_name}
                        </h5>

                        {
                            details.length > 200 ? <p className="mb-5 text-gray-800">{details.slice(0, 250) + '...'}</p> :
                                <p> {details}</p>
                        }

                        {/* The button to open modal */}
                        <label htmlFor="my-modal-5" className="btn modal-button">Show Details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                            <img
                            src={image_url}
                            alt=""
                            className=""
                        />
                                <h3 className="font-bold text-lg">{course_name}</h3>
                                <p className="py-4">{details}</p>
                                 <div className='flex justify-between items-center'>
                                 <p className="py-4 font-bold"> Student:{students}</p>
                                <p className="py-4 font-bold"> Student Rating:{rating.number}</p>
                                 </div>
                                
                                <div className="modal-action">
                                    <label htmlFor="my-modal-5" className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>

                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCategory;