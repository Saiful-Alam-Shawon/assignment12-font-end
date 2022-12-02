import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import { AuthShare } from '../../Context/Context Api/AuthContext';
import Phone from './Phone';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const { modal } = useContext(AuthShare);


    useEffect(() => {
        fetch('https://assignment12-server-one.vercel.app/iPhone')
            .then(res => res.json())
            .then(data => setPhones(data))
        // .then(data => console.log(data))
    }, []);

    return (

        <div className='w-4/5 mx-auto'>

            <div className='grid grid-cols-2 '>

                {
                    phones.map(phone => <Phone key={phone._id}
                        phone={phone}
                    ></Phone>)
                }
                <Modal modal={modal}></Modal>

            </div>
        </div>

    );
};

export default Phones;