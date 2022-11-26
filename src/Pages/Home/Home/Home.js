import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import ProductCategories from './ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            
            <Section></Section>
        </div>
    );
};

export default Home;