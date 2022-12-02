import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthShare } from '../../Context/Context Api/AuthContext';

const Modal = ({ modal }) => {

    const [error, setError] = useState('')
    const { user } = useContext(AuthShare);
    const userEmail = user?.email

    const { buying, location, name, seller, selling, upload, used } = modal;

    const handleSubmit = () => {

        // console.log({ ...modal, userEmail });

        fetch('https://assignment12-server-one.vercel.app/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...modal, userEmail })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    // navigate('/dashboard/product');
                    toast.success('Product Booked')
                }
            })
            .catch(error => setError(error.message));
    }



    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <div className='grid grid-cols-2'>
                        <div><p className="py-4">Selling Price: <span className='font-bold'>{selling}</span> </p></div>
                        <div><p className="py-4">Buying Price: <span className='font-bold'>{buying}</span></p></div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div> <p className="py-4">Used: {used}</p></div>
                        <div><p className="py-4">Uploaded Time: {upload}</p></div>
                    </div>
                    <p className="py-4">Seller Name:{seller} <span className='text-bold'></span> </p>
                    <p className="py-4 text-center">Seller Location: {location}</p>
                    <input type="text" placeholder="You Phone Number" className="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Location Where we Meet" className="input input-bordered input-accent w-full my-2" />
                    <div className='text-center'>
                        <button onClick={handleSubmit} className="btn btn-wide ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;