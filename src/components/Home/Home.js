
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import { Content } from '../Content/Content';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import { Team } from '../Team/Team';

import { Link } from 'react-router-dom';


const Home = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-ronycse16b.vercel.app/cousre-categories')
            .then(res => res.json())
            .then(data => setCategory(data))

    }, [])
    return (
        <div className='dark:bg-black dark:text-slate-50'>

            <Banner></Banner>
            <Content></Content>

            <div className='bg-slate-200  dark:bg-black dark:text-slate-50'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <h1 className='font-bold text-black lg:text-4xl py-5' >Our Course :</h1>
                    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2   lg:max-w-full">
                        {
                            category.map(cata => <Pricing key={cata.id} cata={cata}></Pricing>)
                        }


                    </div>
                    <div className='flex justify-center'>



                        <Link to='/course-category' className='btn w-52 mt-9  bg-red-600 outline-0'>Expolere More     <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg></Link>
                    </div>



                </div>
            </div>



            <HappyClient></HappyClient>
            <Team></Team>
            <Comments></Comments>


        </div>
    );
};

export default Home;