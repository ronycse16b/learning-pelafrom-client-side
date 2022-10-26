import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import { Content } from '../Content/Content';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import { Team } from '../Team/Team';




const Home = () => {
    return (
        <>
           
            <Banner></Banner>
            <Content></Content>
            <Pricing></Pricing>
            <HappyClient></HappyClient>
            <Team></Team>
            <Comments></Comments>
         

        </>
    );
};

export default Home;