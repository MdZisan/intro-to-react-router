import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,id,email,phone}=friend;
    return (
        <div style={{border:"2px solid goldenrod" ,margin:"9px"}}>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
          
            <p><Link to={`/friend/${id}`}>Show me Details</Link></p>
        </div>
    );
};

export default Friend;