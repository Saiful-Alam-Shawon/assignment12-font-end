import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthShare } from '../../../Context/Context Api/AuthContext';

const Buyer = () => {

    const { user } = useContext(AuthShare);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://assignment12-server-one.vercel.app/buyerProductsByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
                // loading(false);
                setLoading(false);
            })
    }, [user?.email]);


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
                                    <p>{product.userEmail}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Accept</button>
                                        <button className="btn btn-ghost">Deny</button>
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