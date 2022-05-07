import React from 'react';
import ProductCarousel from '../../ExtraSection/ProductCarousel/ProductCarousel';
import Banner from '../Banner/Banner';
import Perfumes from '../Perfumes/Perfumes';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Perfumes></Perfumes>
            <ProductCarousel></ProductCarousel>
        </>
    );
};

export default Home;