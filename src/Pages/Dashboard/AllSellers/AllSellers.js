import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }

    const url = 'http://localhost:5000/allsellers';

    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['allsellers', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;

        }
    })

    const handleDelete = seller => {
        fetch(`http://localhost:5000/seller/${seller._id}`, {
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

    const handleVerify = id => {

        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',


        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.modifiedCount>0){
                    alert("Successfully verified");
                }


            })
    }
    const handleVerifyproduct = email => {

        fetch(`http://localhost:5000/productver?email=${email}`, {
            method: 'PUT',


        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.modifiedCount>0){
                    alert("Successfully verified");
                }


            })
    }
    return (
        <div>

            <div>
                <h3 className='text-3xl font-bold my-5'>All Sellers</h3>
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
                                <th>Verify</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                allsellers.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th>{i + 1}</th>
                                        {/* <td>{seller.patient}</td> */}

                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.option}</td>
                                        <td><label onClick={() => setDeleteUser(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>

                                        <td>
                                            {!seller.verify &&
                                                <button onClick={() =>{
                                                    handleVerifyproduct(seller.email)
                                                    handleVerify(seller._id)
                                                }} className='btn btn-sm'>verify</button>
                                            }
                                        </td>
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

export default AllSellers;