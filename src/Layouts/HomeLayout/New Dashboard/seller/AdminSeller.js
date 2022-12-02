import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AdminSeller = () => {

    const [allAdminSellerUsers, setAllAdminSellerUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isreload, setIsreload] = useState(true);


    const handleDelete = id => {
        // console.log(id);
        fetch(`http://localhost:5000/deletingUser/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0)
                    // console.log(data);
                    setLoading(false);
                setIsreload(!isreload);
                toast.success('User Deleted')
            })
    };


    const handleVerify = id => {
        // console.log(id);
        fetch(`http://localhost:5000/user/verify/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.modifiedCount > 0)
                    setLoading(false);
                setIsreload(!isreload);
                toast.success('User Updated')
            })
    };



    useEffect(() => {
        fetch('http://localhost:5000/seller1admin')
            .then(res => res.json())
            .then(data => setAllAdminSellerUsers(data))
        setLoading(false);
    }, [isreload])


    return (
        <div>
            <h2 className='text-4xl font-bold'> All SELLER</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            allAdminSellerUsers.map((user, i) => <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>

                                <td onClick={() => handleVerify(user._id)}>{user?.userRole === 'Seller' ?
                                    <>

                                        {user?.status === "Verified" ?
                                            <div className="btn btn-accent">Verified</div>
                                            :
                                            <button className="btn btn-sm">Verify Now</button>}

                                    </>
                                    :
                                    <>{user.userRole}</>

                                }</td>

                                <td onClick={() => handleDelete(user._id)} ><button className="btn btn-sm">DELETE</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSeller;