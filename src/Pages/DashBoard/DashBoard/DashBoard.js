import React, { useContext } from 'react';
import AdminRoute from '../../../Components/DashBoard/Admin Route/AdminRoute';
import Admin from '../../../Components/DashBoard/Admin/Admin';
import BuyerRoute from '../../../Components/DashBoard/Buyer Route/BuyerRoute';
import Buyer from '../../../Components/DashBoard/Buyer/Buyer';
import Seller from '../../../Components/DashBoard/Seller/Seller';
import SellerRoute from '../../../Components/DashBoard/SellerRoute/SellerRoute';
import useAdmin from '../../../Components/DashBoard/UseAdmin/useAdmin';
import useBuyer from '../../../Components/DashBoard/UseBuyer/useBuyer';
import useSeller from '../../../Components/DashBoard/useSeller/useSeller';
import { AuthShare } from '../../../Context/Context Api/AuthContext';

const DashBoard = () => {

    const { user } = useContext(AuthShare);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);








    if (isAdmin) {
        return <AdminRoute><Admin></Admin></AdminRoute>
    }
    if (isBuyer) {
        return <BuyerRoute> <Buyer></Buyer> </BuyerRoute>
    }
    if (isSeller) {
        return <SellerRoute> <Seller></Seller>  </SellerRoute>
    }






    // return (
    //     <div>


    //         <BuyerRoute><Buyer></Buyer> </BuyerRoute>
    //     </div>
    // );
};

export default DashBoard;