import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AdminBuyer = () => {
    const [allAdminBuyerUsers, setAllAdminBuyerUsers] = useState([]);
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



    useEffect(() => {
        fetch('http://localhost:5000/buyer1admin')
            .then(res => res.json())
            .then(data => setAllAdminBuyerUsers(data))
        setLoading(false);
    }, [isreload])

    return (
        <div>
            <h2 className='text-4xl font-bold'> All BUYER</h2>

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
                            allAdminBuyerUsers.map((user, i) => <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td onClick={() => handleDelete(user._id)} ><button className="btn btn-sm">DELETE</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminBuyer;