import React from 'react';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import ProductCategories from './ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Banner></Banner>
            <ProductCategories></ProductCategories>

            <Section></Section>
        </div>
    );
};

export default Home;