import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    const { chefPicture, chefName, numberOfRecipes, yearsOfExperience, likes, id, chefBio, recipes,} = singleData
    return (
        <div className='md:w-4/5 mx-auto my-12'>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='md:w-1/2 p-2 '>
                    <figure><img className='rounded-xl' src={chefPicture} alt="chef picture" /></figure>
                </div>
                <div className="card-body md:w-1/2">
                    <h2 className="card-title">{chefName}</h2>
                    <p>{chefBio}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;