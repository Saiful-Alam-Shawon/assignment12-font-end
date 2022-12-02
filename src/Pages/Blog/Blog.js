import React from 'react';

const Blog = ({ blog }) => {

    const { qu, ans } = blog

    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{qu}</h2>
                    <p>{ans}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;