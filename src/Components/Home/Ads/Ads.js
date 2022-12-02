import React, { useContext, useEffect, useState } from 'react';
import { AuthShare } from '../../../Context/Context Api/AuthContext';
import useSeller from '../../DashBoard/useSeller/useSeller';
import Ad from './Ad';

const Ads = () => {

    const { user, } = useContext(AuthShare);
    const [advertise, setAdvertise] = useState([]);
    const [isSeller] = useSeller(user?.email);
    const [isreload, setIsreload] = useState(true);
    const [loading, setLoading] = useState(true);


    console.log(isSeller);
    console.log(advertise.length);

    useEffect(() => {
        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => setAdvertise(data))
        setLoading(false);
        // setIsreload(!isreload);
    }, [loading, isreload]);

    // && isSeller

    if (advertise.length > 0)
        return (

            <>


                <div>
                    <h2 className='text-4xl font-bold md:my-4 lg:my-8 text-center'> Advertise </h2>
                    <div className='grid grid-cols-3 '>
                        {
                            advertise?.map(category1 => <Ad
                                key={category1._id}
                                category1={category1}
                            >
                            </Ad>)
                        }

                    </div>

                </div>





            </>

        );
};

export default Ads;