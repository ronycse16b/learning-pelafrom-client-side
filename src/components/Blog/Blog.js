import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                1st Quetion:
                            </a>

                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    * what is cors?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            <p className='font-bold text-amber-500'>Answer:</p>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port)
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                2nd Quetion:
                            </a>

                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    * Why are you using firebase?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            <p className='font-bold text-amber-500'>Answer:</p>
                            Why are you using Firebase `? What other options do you have to implement authentication?

                            Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. .
                            <br />
                           
                            Password-based authentication. Passwords are the most common methods of authentication. ...
                            Multi-factor authentication. ...
                            Certificate-based authentication. ...
                            Biometric authentication. ...
                            Token-based authentication.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                               3. Quetion:
                            </a>
                     
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                             
                                How does the private route work?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                        <p className='font-bold text-amber-500'>Answer:</p>
                        renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                               4. Quetion:
                            </a>
                     
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                             
                                What is Node? How does Node work
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                        <p className='font-bold text-amber-500'>Answer:</p>
                        Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code
                        </p>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Blog;