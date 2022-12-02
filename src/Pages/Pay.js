import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Pay = () => {

    const pay = useLoaderData();

    console.log({ pay });

    return (
        <div>
            <h3 className='text-3xl font-bold'>Pay Here </h3>
        </div>
    );
};

export default Pay;