
import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className="relative ">
      <img
        src="https://www.freecodecamp.org/news/content/images/2021/09/emily-bernal-v9vII5gV8Lw-unsplash.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-70">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Creating Professional and Dynamic   <br className="hidden md:block" />
           
                <span className="text-teal-accent-400">Graphics Design</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-100 md:text-lg">
              We are a professional team and offer creative and dynamic logo design services.
              </p>
              <button
                className=" btn btn-outline outline-2 text-cyan-50 "
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </button>

              <Link to='/register' className=' btn bg-red-600 ml-5'> Sign up Here</Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12  2xl:py-72">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;