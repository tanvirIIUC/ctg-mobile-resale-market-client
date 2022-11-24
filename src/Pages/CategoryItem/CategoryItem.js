import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryItem = () => {
    const collections = useLoaderData();
    
    
    console.log(collections)
    return (
        <div className='container mx-auto'>
            <h1>item : {collections.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    collections.map(collection => <div key={collection._id} >
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='object-cover h-60' src={collection.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{collections.title}</h2>
                                <p>Location:{collection.location}</p>
                                <p>Resale  Price:{collection.resalePrice}</p>
                                <p>Orginal Price:{collection.orginalPrice}</p>
                                <p>year Of Use:{collection.yearOfUse}</p>
                                <p>Post Time:{collection.postTime}</p>
                                <p>Seller Name:{collection.sellerName}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryItem;