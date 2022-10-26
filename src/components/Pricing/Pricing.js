import React from 'react';

const Pricing = () => {
	return (
		<div className='bg-slate-200'>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
				<h1>Our Course</h1>
				<div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2   lg:max-w-full">
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
						<img
							src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
								<a
									href="/"
									className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
									aria-label="Category"
									title="traveling"
								>
									traveling
								</a>
								<span className="text-gray-600">— 28 Dec 2020</span>
							</p>
							<a
								href="/"
								aria-label="Category"
								title="Visit the East"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
							>
								Visit the East
							</a>
							<p className="mb-2 text-gray-700">
								Sed ut perspiciatis unde omnis iste natus error sit sed quia
								consequuntur magni voluptatem doloremque.
							</p>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a>
						</div>
					</div>
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
						<img
							src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
								<a
									href="/"
									className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
									aria-label="Category"
									title="traveling"
								>
									traveling
								</a>
								<span className="text-gray-600">— 28 Dec 2020</span>
							</p>
							<a
								href="/"
								aria-label="Category"
								title="Simple is better"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
							>
								Simple is better
							</a>
							<p className="mb-2 text-gray-700">
								Sed ut perspiciatis unde omnis iste natus error sit sed quia
								consequuntur magni voluptatem doloremque.
							</p>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a>
						</div>
					</div>
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
						<img
							src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
								<a
									href="/"
									className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
									aria-label="Category"
									title="traveling"
								>
									traveling
								</a>
								<span className="text-gray-600">— 28 Dec 2020</span>
							</p>
							<a
								href="/"
								aria-label="Category"
								title="Film It!"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
							>
								Film It!
							</a>
							<p className="mb-2 text-gray-700">
								Sed ut perspiciatis unde omnis iste natus error sit sed quia
								consequuntur magni voluptatem doloremque.
							</p>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
                <div className='flex justify-center'>
				<button className='btn w-52 mt-9  bg-red-600 outline-0'>Expolere More     <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg></button>
				</div>

			</div>
		</div>
	);
};

export default Pricing;