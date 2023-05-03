import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    return (
        <div>
            <h1>chef detais is comming soon....</h1>
        </div>
    );
};

export default ChefDetails;