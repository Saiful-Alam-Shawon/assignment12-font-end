// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { } from '../../../Context/Context Api/AuthContext';


// const client = new QueryClient();


const Admin = () => {

    // const {user}=useContext(AuthShare);
    const [allAdminUsers, setAllAdminUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isreload, setIsreload] = useState(true);


    const handleDelete = id => {
        // console.log(id);
        fetch(`https://assignment12-server-one.vercel.app/deletingUser/${id}`, {
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
        fetch(`https://assignment12-server-one.vercel.app/user/verify/${id}`, {
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
        fetch('https://assignment12-server-one.vercel.app/all')
            .then(res => res.json())
            .then(data => setAllAdminUsers(data))
        setLoading(false);
    }, [loading, isreload]);


    // /user/verify/:id

    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://assignment12-server-one.vercel.app/all');
    //         const data = await res.json();
    //         return data;
    //     }
    // })




    return (
        // <QueryClientProvider client={client}>
        <div>

            <h2 className='text-4xl font-bold'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            allAdminUsers.map(user => <tr key={user._id}>
                                <td>{user.userEmail}</td>
                                <td>{user.userName}</td>
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
                        {/* <tr key={user._id}
                                    >
                                        <th>{i + 1}</th>
                                        <td>{user.userName}</td>
                                        <td>{user.userRole}</td>
                                        <td>{ }</td>
                                    </tr>
                            <tr> */}
                        {/* <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* <!-- row 2 --> */}

                        {/* <!-- row 3 --> */}
                        {/* */}
                    </tbody>
                </table>
            </div>
        </div>
        // </QueryClientProvider >
    );
};

export default Admin;