import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-screen p-16 bg-red-100 dark:bg-gray-900 dark:text-gray-100 text-white">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only text-red-600 font-bold">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Oh! Here isnt Any Page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400 bg-slate-500" > Go homepage</p>
                        <Link to ='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;