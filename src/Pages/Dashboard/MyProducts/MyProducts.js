import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

    const { data: myproducts = [] } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;

        }
    })
    return (
        <div>
            <h3 className='text-3xl font-bold my-5'>MY Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {
                            myproducts.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    {/* <td>{product.patient}</td> */}
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.title}</td>
                                    <td>{product.resalePrice}</td>
                                    <td>{}</td>
                                    
                                    <td><button className='btn'>delete</button></td>
                                    <td><button className='btn'>ads</button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;