import React from 'react';

const Pricing = ({ cata }) => {
const {name, image_url} = cata;



	return (
		<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
			<img
				src={image_url}
				className="object-cover w-full h-64"
				alt=""
			/>
			<div className="p-5 border border-t-0">
				
				<a
				
					aria-label="Category"
					title="Film It!"
					className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
				>
					{name}
				</a>
				<p className="mb-2 text-gray-700">
					Sed ut perspiciatis unde omnis iste natus error sit sed quia
					consequuntur magni voluptatem doloremque.
				</p>
				
			</div>
		</div>
	);
};

export default Pricing;


