import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard';

const Home = () => {
    const ChefInfo = useLoaderData()
    // console.log(ChefInfo)

    return (
        <div className='md:w-4/5 mx-auto'>
            <h1>this is home page</h1>

            <div>
                {
                   ChefInfo.map(data => <ChefCard
                   key={data.id}
                   data={data}
                   ></ChefCard>) 
                }
            </div>
        </div>
    );
};

export default Home;