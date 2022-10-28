import React from 'react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import Pricing from '../Pricing/Pricing';






const Sideber = () => {

	const [categories, setCategories] = useState([]);
	console.log(categories);
	useEffect(() => {
		fetch('http://localhost:5000/cousre-categories')
			.then(res => res.json())
			.then(data => setCategories(data))

	}, [])
	return (
		<><Header></Header>
			<section className=" dark:text-gray-100">
				<div className="flex flex-col-reverse mx-auto lg:flex-row">
					<div className="flex flex-col  py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/4  dark:bg-violet-400 dark:text-gray-900 bg-gray-800 lg:h-screen">

						{
							categories.map(category => <Link key={category.id} className="btn bg-slate-100 text-black hover:bg-red-600 hover:text-white" to={`/course-category/${category.id}`} rel="noopener noreferrer" href="#">{category.name}</Link>
							)}
					</div>
					<div className="lg:w-3/4  dark:bg-gray-800">
						<div className="flex items-center justify-center ">
			

							   
							<Outlet>
							</Outlet>
					
						</div>
					</div>
				</div>
			</section>
		</>

	);
};

export default Sideber;

