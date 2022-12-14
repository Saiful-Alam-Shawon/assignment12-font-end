import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthShare } from '../../../Context/Context Api/AuthContext';

const MyProduct = () => {

    const { user, setAds, ads } = useContext(AuthShare);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // const [isreload, setIsreload] = useState(true);
    const [isreload, setIsreload] = useState(true);



    const handleAds = (product) => {
        fetch('http://localhost:5000/ads', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    // navigate('/dashboard/product');
                    setLoading(false);
                    setIsreload(!isreload);
                    toast.success('Product Added')
                }
            })
            .catch(error => setError(error.message));

    }

    // console.log(ads);


    const handleDelete = id => {
        // console.log(id);
        fetch(`http://localhost:5000/deletingProduct/${id}`, {
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
        fetch(`http://localhost:5000/sellerProductsByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
                // loading(false);
                setLoading(false);
            })
    }, [user?.email, isreload]);

    // console.log(`http://localhost:5000/sellerProductsByEmail?email=${user?.email}`);
    // console.log(products.length);
    // console.log(user.email);
    // no


    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                products.map(product =>
                    <div key={product._id} >
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"> Name: {product?.Name}</h2>
                                <p>Price: {product?.Price}</p>
                                <p>Used Year: {product?.UsedYear}</p>
                                <p>Category: {product?.Category}</p>
                                <p>Condition{product?.Condition}</p>
                                <p>Mobile: {product?.Mobile}</p>
                                <p>Seller Location: {product?.Location}</p>
                                <p>Seller Email: {product?.userEmail}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                                    <button onClick={() => handleAds(product)} className="btn btn-primary">Ads</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }





            {/* Extra Card  */}


            {/* <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button onClick={() => setAds("ok")} className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default MyProduct;