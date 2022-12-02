import React, { useContext } from 'react';
import { AuthShare } from '../../Context/Context Api/AuthContext';

const Phone2 = ({ phone2 }) => {

    const { setModal } = useContext(AuthShare);
    const { buying, img, location, name, seller, selling, upload, used } = phone2;

    return (
        <div>
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
                            <label onClick={() => { setModal(phone2) }} htmlFor="my-modal-3" className="btn btn-primary">Book Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone2;