export const Team = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our Speacial Trainner Here</h1>
        <p className="max-w-2xl text-center dark:text-gray-400">Personal trainers assess their customers' bodily strengths and weaknesses and create customized workout plans. They provide physical and mental guidance and monitor customers' progress on a regular basis. They also make sure that customers don't get injured while trainin!</p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
            <p className="text-xl font-semibold leading-tight">David Carson.</p>
            <p className="dark:text-gray-400">Graphics Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
            <p className="text-xl font-semibold leading-tight">Saul Bass</p>
            <p className="dark:text-gray-400">Expart Logo Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-400">Expart Banner Degin</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
            <p className="text-xl font-semibold leading-tight">Paula Scher.s</p>
            <p className="dark:text-gray-400">Motion Graphics Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
            <p className="text-xl font-semibold leading-tight"> Jenkins</p>
            <p className="dark:text-gray-400">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
            <p className="text-xl font-semibold leading-tight">Loey</p>
            <p className="dark:text-gray-400">Teshirt Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};