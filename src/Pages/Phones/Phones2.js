import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import { AuthShare } from '../../Context/Context Api/AuthContext';
import Phone2 from './Phone2';

const Phones2 = () => {

    const { modal } = useContext(AuthShare)
    const [phones2, setPhones2] = useState([]);

    useEffect(() => {
        fetch('https://assignment12-server-one.vercel.app/Huawei')
            .then(res => res.json())
            .then(data => setPhones2(data))
        // .then(data => console.log(data))
    }, []);

    return (

        <div className='w-4/5 mx-auto'>
            <div className='grid grid-cols-2 mx-auto'>
                {
                    phones2.map(phone2 => <Phone2 key={phone2._id}
                        phone2={phone2}
                    ></Phone2>)
                }
                <Modal modal={modal} ></Modal>
            </div>

        </div>

    );
};

export default Phones2;