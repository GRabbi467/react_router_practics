import React from 'react';
import './Post.css';
import { Link, Navigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
   
    return (
        <div className='post'>
            <p>Title : {title}</p>

            <Link className='underline' to ={`/posts/${id}`}>visit: {id}</Link>
        </div>
       
    );
};

export default Post;