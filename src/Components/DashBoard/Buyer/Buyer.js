import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthShare } from '../../../Context/Context Api/AuthContext';

const Buyer = () => {

    const { user } = useContext(AuthShare);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isreload, setIsreload] = useState(true);



    const handleDelete = id => {
        // console.log(id);
        fetch(`http://localhost:5000/BuyerProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0)
                    // console.log(data);

                    toast.success('Product Deleted')
                setLoading(false);
                setIsreload(!isreload);
            })
    };




    useEffect(() => {
        fetch(`http://localhost:5000/buyerProductsByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
                // loading(false);
                setLoading(false);
            })
    }, [user?.email, isreload]);


    return (
        <div>
            <h2 className='text-3xl font-bold'>Buyer Booked This Items</h2>
            <div className='grid grid-cols-2 gap-4'>
                {
                    products.map(product =>
                        <div key={product._id} >
                            <div className="card w-96 bg-neutral text-neutral-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.selling}</p>
                                    <p>{product.location}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/dashboard/dash1boar1db1/pay/${product._id}`}>   <button className="btn btn-primary">Pay</button></Link>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-ghost">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>





        </div>
    );
};

export default Buyer;