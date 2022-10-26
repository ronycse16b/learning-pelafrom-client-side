import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className='py-16'>
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-black mx-auto border shadow-lg">
            <h1 className="text-2xl font-bold text-center">Sign Up Page</h1>
            <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label for="username" className="block text-black">Name</label>
                    <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="username" className="block text-black">Photo Url</label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="username" className="block text-black">Email</label>
                    <input type="email" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block text-black">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                   
                </div>
                <button className="block w-full p-3 btn text-center rounded-sm text-white bg-red-600">Sign Up</button>
            </form>
           
        
            <p className="text-xs text-center sm:px-6 text-black"> Have an account?
                <Link to='/login' rel="noopener noreferrer" href="#" className="underline text-black">Sign in Now</Link>
            </p>
        </div>
      </div>
        </div>
    );
};

export default Register;