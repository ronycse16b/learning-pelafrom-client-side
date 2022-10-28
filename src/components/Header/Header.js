import { useContext, useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.png'
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {



    const [theme, setTheme] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))




    }
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      
    }

    return (
        <div className="bg-white  border-b-4 shadow-md  border-red-600  dark:bg-black dark:text-white">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="relative flex items-center justify-between">
                    <Link to='/'

                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className="w-10" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide  dark:text-white text-gray-800 uppercase">
                            E-Graphics Design IT
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to='/home'
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide  dark:text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/course-category'

                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide  dark:text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                All Course
                            </Link>
                        </li>
                        <li>
                            <Link

                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide  dark:text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link

                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide  dark:text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                F & Q
                            </Link>
                        </li>

                        <li>


                            {
                                user?.uid ?
                                    <div className="flex items-center">
                                       <span className="font-bold">{user?.displayName}</span> 
                                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        {
                                            user?.photoURL ?
                                               
                                                    <img src={user?.photoURL} alt="" className=" tooltip  ml-5 w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" data-tip="hello asgh;ljkhjhfddf"
                                                    />
                                                    : <img className="w-10 h-10 rounded-full ring-2 ring-offset-4" src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" alt="" />
                                           
                                               
                                        }
                                             </div>
                                        <button className="btn ml-4" onClick={handelLogout} >

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-5 h-5 fill-current dark:text-gray-400">
                                                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                                <rect width="32" height="64" x="256" y="232"></rect>
                                            </svg>
                                            Logout</button>

                                    </div>
                                    :
                                    <>
                                        <Link to='/register'

                                            className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide bg-red-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mr-5"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Register
                                        </Link>
                                        <Link to='/login'

                                            aria-label="Login"
                                            title="Login"
                                            className="font-medium tracking-wide  dark:text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Login
                                        </Link>
                                    </>
                            }

                        </li>
                        <li>
                            <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:dark:text-gray-100">

                                <span className="relative">
                                    <input onClick={handleThemeSwitch} id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:dark:dark:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                </span>

                            </label>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a

                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                  
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                   E-Graphices IT
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to='/home'
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/course-category'

                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    All Course
                                                </Link>
                                            </li>
                                            <li>
                                                <Link

                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link

                                                    aria-label="About us"
                                                    title="About us"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    F & Q
                                                </Link>
                                            </li>
                                            <li>


                                                {
                                                    user?.uid ?
                                                        <div className="lg:flex items-center sm:py-3 ">
                                                            {user?.displayName}

                                                            {
                                                                user?.photoURL ?
                                                                    <img src={user?.photoURL} alt="" className="ml-5 w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                                                                    />
                                                                    : <img className="w-10 h-10 rounded-full ring-2 ring-offset-4" src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" alt="" />
                                                            }
                                                            <button className="btn ml-4" onClick={handelLogout} >

                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-5 h-5 fill-current dark:text-gray-400">
                                                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                                                    <rect width="32" height="64" x="256" y="232"></rect>
                                                                </svg>
                                                                Logout</button>

                                                        </div>
                                                        :
                                                        <>
                                                            <Link to='/register'

                                                                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide bg-red-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mr-5"
                                                                aria-label="Sign up"
                                                                title="Sign up"
                                                            >
                                                                Register
                                                            </Link>
                                                            <Link to='/login'

                                                                aria-label="Login"
                                                                title="Login"
                                                                className="font-medium tracking-wide  dark:text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Login
                                                            </Link>
                                                        </>
                                                }

                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;