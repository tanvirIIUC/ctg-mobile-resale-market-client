import React from 'react';

const Banner = () => {
    return (
        <div className="hero  mb-5" style={{ backgroundImage: `url("https://sathya.in/media/3420/catalog/mobiles.jpg")` }}>
            <div className="hero-overlay bg-opacity-60 py-64"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To CTG Mobile Resale market</h1>
                    
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;