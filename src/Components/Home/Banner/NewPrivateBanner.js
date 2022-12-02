// import React, { useEffect, useState } from 'react';
// import BannerCategory from './BannerCategory';





// const NewPrivateBanner = () => {
//     const [category, setCategory] = useState();

//     useEffect(() => {
//         fetch('https://assignment12-server-one.vercel.app/cat')
//             .then(res => res.json())
//             .then(data => setCategory(data))
//     }, []);


//     return (
//         <div>
//             <div>
//                 <h2 className='text-4xl font-bold md:my-4 lg:my-8 text-center'> OUR LATEST CATEGORY</h2>
//                 <div className='grid grid-cols-3 '>
//                     {
//                         category?.map(category1 => <BannerCategory
//                             key={category1._id}
//                             category1={category1}
//                         >
//                         </BannerCategory>)
//                     }

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default NewPrivateBanner;