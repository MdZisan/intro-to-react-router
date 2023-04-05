import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendData = () => {
    const data= useLoaderData();
    const {name,id,email,phone}=data;
    return (
        <div>
           <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
        </div>
    );
};

export default FriendData;