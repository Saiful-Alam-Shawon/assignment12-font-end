import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthShare } from '../../Context/Context Api/AuthContext';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthShare);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // console.log(name);
        const email = form.email.value;
        const password = form.password.value;
        const select = form.select.value;

        // console.log(name, email, select);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    userName: name
                };
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error.message));
                console.log(name, email, select, password);
            })
            .catch(error => setError(error.message));

        const userData = {
            userName: name,
            userEmail: email,
            userRole: select
        }


        fetch('https://assignment12-server-one.vercel.app/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('User Created Successfully')
                    navigate('/');
                }

            })
            .catch(error => setError(error.message));




    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  ">
                    <div className="text-center ">

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center">Register Now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />


                                <select name='select' className="select select-bordered w-full mt-2">
                                    <option select={"Buyer"}>Buyer</option>
                                    <option select={"Seller"}>Seller</option>
                                </select>


                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Login</Link>
                                </label>
                                {error && <p className='text-red-600'>{error}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;