import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './shared/Banner';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    const singleData = useLoaderData()
    // console.log(singleData)f
    const { chefPicture, chefName, numberOfRecipes, yearsOfExperience, likes, id, chefBio, recipes,} = singleData
    return (
        <div className='md:w-4/5 mx-auto '>
            <Banner></Banner>
            <div className="card lg:card-side bg-base-100 shadow-xl  my-12">
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

            <div className='my-4'>
                {
                    recipes.map( (recipe, index) => <RecipeCard
                    key={index}
                    recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;