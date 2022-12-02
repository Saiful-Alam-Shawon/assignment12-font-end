import React, { useContext } from 'react';
import { AuthShare } from '../../Context/Context Api/AuthContext';

const Phone = ({ phone }) => {

    const { setModal } = useContext(AuthShare);

    const { buying, img, location, name, seller, selling, upload, used } = phone

    // console.log(img);


    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{name} </p>
                    <p>{selling} </p>
                    <p>{buying} </p>
                    <p>{used} </p>
                    <p>{upload} </p>
                    <p>{seller} </p>
                    <p>{location} </p>
                    <div className="card-actions justify-end">
                        <label onClick={() => { setModal(phone) }} htmlFor="my-modal-3" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;