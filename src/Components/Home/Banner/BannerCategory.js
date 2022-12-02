import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner.jpeg';
// import PrivateRoutes from '../../../Routes/PrivateRoute/PrivateRoutes';

const BannerCategory = ({ category1 }) => {

    // const { name } = category;
    // console.log(category1?.name);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={banner1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category1?.name}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                {/* <PrivateRoutes> */}
                <div className="card-actions">
                    <Link to={`/${category1?.name}`}> <button className="btn btn-primary">{category1?.name}</button>

                    </Link>
                </div>
                {/* </PrivateRoutes> */}
            </div>
        </div>
    );
};

export default BannerCategory;