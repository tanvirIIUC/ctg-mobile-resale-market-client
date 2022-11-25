import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);

    const url = 'http://localhost:5000/allbuyers';

    const { data: allbuyers = [] } = useQuery({
        queryKey: ['allbuyers', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;

        }
    })
    return (
        <div>

            <div>
                <h3 className='text-3xl font-bold my-5'>All buyers</h3>
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
                                allbuyers.map((buyer, i) =>
                                    <tr key={buyer._id}>
                                        <th>{i + 1}</th>
                                        {/* <td>{buyer.patient}</td> */}

                                        <td>{buyer.name}</td>
                                        <td>{buyer.email}</td>
                                        <td>{buyer.option}</td>

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

export default AllBuyers;