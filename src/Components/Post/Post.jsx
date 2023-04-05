import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,body,id}=post;
    return (
        <div style={{border:"2px solid orange",margin:"10px"}}>
            <h4>{id}</h4>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <button><p><Link to={`/post/${id}`}>Read more</Link></p></button>
        </div>
    );
};

export default Post;