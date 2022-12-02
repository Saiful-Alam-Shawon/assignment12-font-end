import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { AuthShare } from '../../../Context/Context Api/AuthContext';
// import { Link } from 'react-router-dom';
// import useSeller from './../useSeller/useSeller';

const Seller = () => {

    const { user } = useContext(AuthShare);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const userEmail = user?.email;


    // React Hook Form Start
    // const [data, setData] = useState('');
    const { register, handleSubmit } = useForm();

    const productSubmit = data => {

        fetch('https://assignment12-server-one.vercel.app/allProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data, userEmail })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    navigate('/dashboard/product');
                    toast.success('Product Added')
                }
            })
            .catch(error => setError(error.message));


        // console.log({ ...data, userEmail });
    }




    // React Hook Form Finish





    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [location, setLocation] = useState('');
    // const [usedYear, setUsedYear] = useState('');
    // const [description, setDescription] = useState('');
    // const [category, setCategory] = useState('iPhone');
    // const [conditions, setConditions] = useState('Excellent');

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const productData = { name, price, mobile, location, usedYear, description, category, conditions, userEmail }

    //     // console.log(data);

    //     fetch('https://assignment12-server-one.vercel.app/allProducts', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(productData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.acknowledged) {
    //                 navigate('/dashboard/product');
    //                 toast.success('Product Added')
    //             }
    //         })
    //         .catch(error => setError(error.message));

    // }




    return (
        // Hook Form Start


        <form onSubmit={handleSubmit(productSubmit)}>




            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" {...register("Name")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Price</span></label>
                <input type="text" {...register("Price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Mobile</span></label>
                <input type="text" {...register("Mobile")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">usedYear</span></label>
                <input type="text" {...register("UsedYear")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Location</span></label>
                <input type="text" {...register("Location")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>


            <div className="form-control">
                <label className="label"><span className="label-text">Description</span></label>
                {/* <textarea className="textarea textarea-bordered h-24" ></textarea> */}
                <textarea {...register("Description")} placeholder="Description" className="textarea textarea-bordered h-24 w-96" />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Condition</span></label>
                <select {...register("Category", { required: true })} className="select select-bordered">
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                </select>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Category</span></label>
                <select {...register("Condition", { required: true })} className="select select-bordered">
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Huawei">Huawei</option>
                </select>
            </div>





            <p>{error}</p>
            <input className="btn btn-accent m-4" type="submit" />
        </form>


        // Hook Form Finish


        // <form action="">

        //     <div className='m-2'>
        //         <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs mr-2"
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //         />
        //         <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs"
        //             value={price}
        //             onChange={(e) => setPrice(e.target.value)}
        //         />

        //     </div>
        //     <div className='m-2'>
        //         <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs mr-2"
        //             value={mobile}
        //             onChange={(e) => setMobile(e.target.value)}
        //         />
        //         <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs"
        //             value={location}
        //             onChange={(e) => setLocation(e.target.value)}
        //         />

        //     </div>
        //     <div className='m-2'>
        //         <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs mr-2"
        //             value={usedYear}
        //             onChange={(e) => setUsedYear(e.target.value)}
        //         />
        //         <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs"
        //             value={description}
        //             onChange={(e) => setDescription(e.target.value)}
        //         />

        //     </div>
        //     <div className='m-2'>
        //         <select className="select select-bordered w-full max-w-xs mr-2"
        //             value={category}
        //             onChange={e => setCategory(e.target.value)}
        //         >

        //             <option>iPhone</option>
        //             <option>Samsung</option>
        //             <option>Huawei</option>
        //         </select>
        //         <select className="select select-bordered w-full max-w-xs"
        //             value={conditions}
        //             onChange={e => setConditions(e.target.value)}>
        //             <option>Excellent</option>
        //             <option>Good</option>
        //             <option>Fair</option>
        //         </select>
        //     </div>






        //     <div><button onClick={handleSubmit} className="btn btn-wide">Submit</button></div>
        //     <p>{error}</p>
        // </form>

    );
};

export default Seller;