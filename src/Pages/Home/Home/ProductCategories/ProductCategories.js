import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='container mx-auto '>
            <h1 className='text-2xl font-bold text-center'>Product Category</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 '>
                {
                    categories.map(category => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={category.img} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{category.name}</h2>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                <div className="card-actions">
                                <p className='bg-primary px-3 text-light rounded'><Link className='text-light text-decoration-none' to={`/categories/${category.id}`}> All mobile</Link></p>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;