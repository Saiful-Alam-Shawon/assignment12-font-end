import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShare } from '../../../Context/Context Api/AuthContext';
// import banner1 from '../../../images/banner.jpeg';
import laptop1 from '../../../images/laptop1.jpg';
import laptop2 from '../../../images/laptop2.jpg';
import laptop3 from '../../../images/laptop3.jpg';
// import PrivateRoutes from '../../../Routes/PrivateRoute/PrivateRoutes';
// import PrivateRoutes from '../../../Routes/PrivateRoute/PrivateRoutes';
import BannerCategory from './BannerCategory';
// import NewPrivateBanner from './NewPrivateBanner';
// import Phones from '../../../Pages/Phones/Phones';
// import BannerCategory from './BannerCategory';
// import NewPrivateBanner from './NewPrivateBanner';
import Ads from './../Ads/Ads';

// const data= require('../../../A.json');




const Banner = () => {
    const [category, setCategory] = useState();
    const { user } = useContext(AuthShare)

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    // console.log(category.name);


    return (
        <section >
            {/* <div className="dark:bg-violet-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 bg-gray-700 text-white">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
                    <ul className="menu bg-gray-700 text-white w-56 p-2 rounded-box">

                        <span className='text-2xl font-bold text-white'>Category</span> */}

            {/* {
                            category?.map(category1 => <li key={category1._id}><Link to={`/${category1.name}`}

                            >{category1.name}</Link></li>)
                        } */}
            {/* <Phones category={category} ></Phones> */}
            {/* </ul>

                </div>
            </div>
            <img alt=' ' src={banner1} className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" /> */}


            {/* New Banner Is here.................... */}


            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.sammobile.com/wp-content/uploads/2022/08/Galaxy-Z-Fold-4-23-1.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">BUY/SELL YOUR PHONE</h1>
                        {user?.uid ? <>
                        </>
                            :
                            <>
                                <Link to='/register'>
                                    <button className="btn btn-primary">Get Started</button>
                                </Link>
                            </>


                        }
                    </div>
                </div>
            </div>

            {/* <PrivateRoutes> <NewPrivateBanner></NewPrivateBanner>  </PrivateRoutes> */}

            <div>
                <h2 className='text-4xl font-bold md:my-4 lg:my-8 text-center'> OUR LATEST CATEGORY</h2>
                <div className='grid grid-cols-3 '>
                    {
                        category?.map(category1 => <BannerCategory
                            key={category1._id}
                            category1={category1}
                        >
                        </BannerCategory>)
                    }

                </div>

            </div>

            <Ads></Ads>


            {/* Our Latest Section */}

            <div className='text-4xl font-bold text-amber-900 text-center md:my-4 lg:my-8'>Laptop Items Coming Soon </div>

            <div className="carousel w-5/6 mx-auto mb-8">




                <div id="slide1" className="carousel-item relative w-full">
                    <img alt=' ' src={laptop1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt=' ' src={laptop2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt=' ' src={laptop3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt=' ' src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>





        </section>
    );
};

export default Banner;