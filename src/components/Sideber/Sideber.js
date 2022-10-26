import React from 'react';
import { Link } from "react-router-dom";
import Login from '../LoginAsset/Login/Login';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Sideber = () => {
	return (
		 <><Header></Header>
	<section className='flex'>
		
			<div className='w-1/5   '>
			<aside className="h-screen p-6 sm:w-72 bg-gray-900 text-gray-100">
				<nav className="space-y-8 text-sm">
					<div className="space-y-2">
						<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Getting Started</h2>
						<div className="flex flex-col space-y-1">
							<Link to='/all-topices/login' rel="noopener noreferrer" href="#"> 1.Adobe Photoshop CC</Link>
							<Link to='/all-topices/register' rel="noopener noreferrer" href="#">2.Logo Design Mastery In Adobe Illustrator</Link>
							<a rel="noopener noreferrer" href="#">3.Graphic Design Masterclass </a>
							<a rel="noopener noreferrer" href="#">4.Introduction To Graphic Design</a>
							<a rel="noopener noreferrer" href="#">5.Canva Master Course</a>
							<a rel="noopener noreferrer" href="#">6.47 Graphic Design Projects for Photoshop Beginners</a>
						</div>
					</div>
					
					
				</nav>
			</aside>

		</div>
		<div className='w-4/4'>
		<Outlet></Outlet>
		</div>
	
	</section>
	
	</>

	);
};

export default Sideber;