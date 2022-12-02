import React from 'react';

const Ad = ({ category1 }) => {


    console.log(category1?.name);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                {/* <img src={} alt="Shoes" className="rounded-xl" /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Product Name: {category1?.name}</h2>
                <h2 className="card-title">Product Price: {category1?.price}</h2>
                <h2 className="card-title">Seller's Location: {category1?.location}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}

            </div>
        </div>
    );
};

export default Ad;