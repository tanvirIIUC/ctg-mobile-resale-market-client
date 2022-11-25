import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My orders</Link></li>
                    <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                    <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
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