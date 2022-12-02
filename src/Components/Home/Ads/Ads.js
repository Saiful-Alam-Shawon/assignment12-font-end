import React, { useContext, useEffect, useState } from 'react';
import { AuthShare } from '../../../Context/Context Api/AuthContext';
import useSeller from '../../DashBoard/useSeller/useSeller';
import Ad from './Ad';

const Ads = () => {

    const { user, } = useContext(AuthShare);
    const [ads, setads] = useState([]);
    const [isSeller] = useSeller(user?.email);

    useEffect(() => {
        fetch('https://assignment12-server-one.vercel.app/ads')
            .then(res => res.json())
            .then(data => setads(data))
    }, []);



    if (ads.length > 0 && isSeller)
        return (

            <>


                <div>
                    <h2 className='text-4xl font-bold md:my-4 lg:my-8 text-center'> Advertise </h2>
                    <div className='grid grid-cols-3 '>
                        {
                            ads?.map(category1 => <Ad
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