import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {id,title,body,userId}= post;
    return (
        <div>
            <h2>Details about your post</h2>
            <h2>UserId:{userId}</h2>
            <h1>Title: {title}</h1>
            <h3>{body}</h3>
            <p>post number: {id}</p>
        </div>
    );
};

export default PostDetails;