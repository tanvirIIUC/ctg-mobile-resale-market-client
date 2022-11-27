import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }

    const url = 'https://ctg-mobile-resale-market-server.vercel.app/allbuyers';

    const { data: allbuyers = [], refetch } = useQuery({
        queryKey: ['allbuyers', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;

        }
    })

    const handleDelete = buyer => {
        fetch(`https://ctg-mobile-resale-market-server.vercel.app/buyer/${buyer._id}`, {
            method: 'DELETE',


        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    alert('delete successful')
                }

            })
    }
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
                                        <td><label onClick={() => setDeleteUser(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                        {/* <td><button className='btn'>delete</button></td> */}


                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>

            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}

                    successAction={handleDelete}
                    modalData={deleteUser}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;