import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Outlet } from "react-router-dom";
import Sideber from '../components/Sideber/Sideber';


const Main = () => {
    return (
        <div>
            <Header></Header>
              <Outlet ></Outlet>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Main;