import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AllSellers = () => {
    const { user } = useContext(AuthContext);

    const url = 'http://localhost:5000/allsellers';

    const { data: allsellers = [] } = useQuery({
        queryKey: ['allsellers', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;

        }
    })
    return (
        <div>
            <h1>all sellers</h1>
            <div>
                <h3 className='text-3xl font-bold my-5'>MY sellers</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Option</th>
                                <th>Delete</th>
                               
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allsellers.map((seller, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        {/* <td>{seller.patient}</td> */}
                                        
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.option}</td>

                                        <td><button className='btn'>delete</button></td>
                                       
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllSellers;