import React, { useContext, } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../../Components/DashBoard/UseAdmin/useAdmin';
import useBuyer from '../../../../Components/DashBoard/UseBuyer/useBuyer';
import { AuthShare } from '../../../../Context/Context Api/AuthContext';
import Navbar from '../../../../Shared/Navbar/Navbar';
import useSeller from './../../../../Components/DashBoard/useSeller/useSeller';

const DashBoardLayout = () => {



    const { user } = useContext(AuthShare);
    const [isAdmin] = useAdmin(user?.email);
    // const [isBuyer] = useSeller(user?.email);
    const [isSeller] = useSeller(user?.email);
    // const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email);
    // console.log(isBuyer);
    const adminMenu = <>
        <li><Link to='/dashboard/allUsers'>All Users</Link></li>
        <li><Link to='/dashboard/seller'> Sellers</Link></li>
        <li><Link to='/dashboard/buyer'> Buyers</Link></li>
    </>
    const sellerMenu = <>
        <li><Link to='/dashboard/product'>My Products</Link></li>
        <li ><Link to='/dashboard/dashboards'> Add Products</Link></li>
    </>
    const buyerMenu = <><li><Link to='/dashboard/dash1boar1db1'>My Orders</Link></li></>




    if (isAdmin)
        return (
            <div>
                <Navbar></Navbar>


                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            {adminMenu}

                        </ul>

                    </div>
                </div>
            </div>

        );


    if (isBuyer)
        return (
            <div>
                <Navbar></Navbar>


                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            {buyerMenu}

                        </ul>

                    </div>
                </div>
            </div>
        );
    if (isSeller)
        return (
            <div>
                <Navbar></Navbar>


                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            {sellerMenu}

                        </ul>

                    </div>
                </div>
            </div>
        );
};

export default DashBoardLayout;