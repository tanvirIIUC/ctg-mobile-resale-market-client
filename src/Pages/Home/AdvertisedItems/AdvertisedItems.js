import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { GoVerified } from 'react-icons/go';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AdvertisedItems = () => {
    const { user } = useContext(AuthContext)

    const url = 'https://ctg-mobile-resale-market-server.vercel.app/ads';

    const { data: ads = [], refetch } = useQuery({
        queryKey: ['ads', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;

        }
    })
    return (
        <div className='container mx-auto my-10'>
            {
                ads.length > 0 &&
                <>
                    <h1 className='text-3xl font-bold text-center'>Advertise</h1>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            ads.map(ad => <div key={ad._id} >
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img className='object-cover h-60' src={ad.image} alt="" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{ad.title}</h2>
                                        <p>Location:{ad.location}</p>
                                        <p>Resale  Price:{ad.resalePrice}</p>
                                        <p>Orginal Price:{ad.orginalPrice}</p>
                                        <p>year Of Use:{ad.yearOfUse}</p>
                                        <p>Post Time:{ad.postTime}</p>
                                        <p>Seller Name:{ad.sellerName}</p>
                                        <p>{ad?.verify === 'verify' &&
                                            <p className='text-primary'>
                                                <GoVerified />
                                            </p>
                                        }</p>


                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </>
            }
        </div>
    );
};

export default AdvertisedItems;