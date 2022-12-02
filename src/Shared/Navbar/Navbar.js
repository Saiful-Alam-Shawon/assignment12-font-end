import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShare } from '../../Context/Context Api/AuthContext';

const Navbar = () => {

    const { logOut, user } = useContext(AuthShare);
    const [isreload, setIsreload] = useState(true);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                setIsreload(!isreload);
            })
            .catch(error => console.log(error.message));
    }
    // console.log(user.uid);

    const menu = <>

        <li><Link to='/blog'>Blog</Link></li>
        {/* <li><Link to='/category'>Category</Link></li> */}

        {user?.uid ?
            <>
                <li><Link to='/dashboard'>DashBoard</Link></li>
                {/* <li><Link to='/dashboard/dash1boar1db1'>DashBoardB</Link></li>
                <li><Link to='/dashboard/dashboards'>DashBoardS</Link></li> */}
                <li><Link onClick={handleLogOut}> LogOut</Link></li>
                <span>{user?.email}</span>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>




    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className='text-2xl font-bold '>MOBI-HUB</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link to='/register' className="btn">Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;