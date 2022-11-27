import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [deleteMyProduct, setDeleteMyProduct] = useState(null);

    const closeModal = () => {
        setDeleteMyProduct(null);
    }

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] ,refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            //  console.log(data)
            return data;

        }
    })

    const handleDeleteProduct = book => {
        fetch(`http://localhost:5000/bookings/${book._id}`, {
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
            
               
                    <h3 className='text-3xl font-bold my-5'>{bookings.length && 'MY Orders'}</h3>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Pay</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr>

                                </tr>
                                {
                                    bookings.map((book, i) =>
                                        <tr key={book._id}>
                                            <th>{i + 1}</th>
                                            {/* <td>{book.patient}</td> */}
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={book.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{book.mobileName}</td>
                                            <td>{book.price}</td>
                                            <td><button className='btn'>pay</button></td>
                                            <td>
                                                <label onClick={() => setDeleteMyProduct(book)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                            </td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                

                    {
                deleteMyProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    
                    successAction={handleDeleteProduct}
                    modalData={deleteMyProduct}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;