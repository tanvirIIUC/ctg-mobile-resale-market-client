import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [option, setOption] = useState('')

    const url = `http://localhost:5000/user?email=${user?.email}`;

    const { data: User = [] } = useQuery({
        queryKey: ['User', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data[0].option)
            setOption(data[0].option)
            return data;

        }
    })

    return (
        <div>
            <Navbar></Navbar>


            {/* side nav */}
            <div className="drawer drawer-mobile">
                <input id="dashpoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashpoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            option === 'user' && <>
                                <li><Link to='/dashboard'>My orders</Link></li>
                            </>
                        }
                        {
                            option === 'seller' && <>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                            </>
                        }

                        {
                            option === 'admin' && <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                            </>
                        }

                        {/*  {
                    isAdmin && <>
                     <li><Link to='/dashboard/alluser'>All user</Link></li>
                    </>
                   } */}

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;