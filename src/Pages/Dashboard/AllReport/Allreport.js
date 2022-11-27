import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { GoVerified } from 'react-icons/go';

const Allreport = () => {

    const url = 'https://ctg-mobile-resale-market-server.vercel.app/report';

    const { data: report = [], } = useQuery({
        queryKey: ['report',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;

        }
    })
    return (
        <div className='my-5'>
            <h1>total: {report.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    report.map(rep => <div key={rep._id} >
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='object-cover h-60' src={rep.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{rep.title}</h2>
                                <p>Location:   {rep.location}</p>
                                <p>Resale  Price:   {rep.resalePrice}</p>
                                <p>Orginal Price:   {rep.orginalPrice}</p>
                                <p>year Of Use:   {rep.yearOfUse}</p>
                                <p>Post Time:   {rep.postTime}</p>
                                <p>Seller Name:   {rep.sellerName}</p>
                                <p className='text-red-700'>Report</p>
                                <p>{rep?.verify === 'verify' &&
                                    <p className='text-primary'>
                                        <GoVerified />
                                    </p>
                                }</p>



                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Allreport;