import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import { AuthShare } from '../../Context/Context Api/AuthContext';
import Phone1 from './Phone1';

const Phones1 = () => {
    const [phones1, setPhones1] = useState([]);
    const { modal } = useContext(AuthShare);

    useEffect(() => {
        fetch('https://assignment12-server-one.vercel.app/Samsung')
            .then(res => res.json())
            .then(data => setPhones1(data))
        // .then(data => console.log(data))
    }, []);


    return (

        <div className='w-4/5 mx-auto'>
            <div className='grid grid-cols-2 mx-auto'>
                {
                    phones1.map(phone1 => <Phone1 key={phone1._id}
                        phone1={phone1}
                    ></Phone1>)
                }
                <Modal modal={modal} ></Modal>

            </div>
        </div>

    );
};

export default Phones1;