import React from 'react';
import BrandName from '../../ExtraSection/BrandName/BrandName';
import Information from '../../ExtraSection/Information/Information';
import Banner from '../Banner/Banner';
import Perfumes from '../Perfumes/Perfumes';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Perfumes></Perfumes>
            <Information></Information>
            <BrandName></BrandName>
        </>
    );
};

export default Home;