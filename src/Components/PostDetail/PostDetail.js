import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postdetail = useLoaderData();
    const {userId ,body} = postdetail;

    return (
        <div>
            <p>POST :{body}</p>
            <p><small>Posted By : {userId}</small></p>
        </div>
    );
};

export default PostDetail;