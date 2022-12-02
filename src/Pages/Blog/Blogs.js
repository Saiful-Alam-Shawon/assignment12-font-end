import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    // const { qu, ans } = blog;
    // console.log(qu, ans);

    return (
        <div className='w-3/4 mx-auto mb-6'>
            <div className='grid grid-cols-2 gap-6 '>
                {
                    blogs.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>

    );
};

export default Blogs;