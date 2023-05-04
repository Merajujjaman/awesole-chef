import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './shared/Banner';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    const singleData = useLoaderData()
    // console.log(singleData)f
    const { chefPicture, chefName, numberOfRecipes, yearsOfExperience, likes, id, chefBio, recipes, } = singleData
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

            <div className='md:w-3/5 mx-auto my-4'>
                <p className='text-justify italic '>
                    <span className='text-xl font-bold'>Hi there,</span> As a chef with a passion for creating delicious and unique recipes, I, <span className='text-green-400 font-semibold'>{chefName}</span>, am excited to share my culinary creations with you on my website. With years of experience in the kitchen, I have honed my skills and developed a keen sense of taste, allowing me to create recipes that are both flavorful and visually appealing.

                    My recipes are inspired by a variety of cuisines, and I am always experimenting with new ingredients and techniques to keep things fresh and interesting. Whether you're looking for a quick and easy weeknight meal or an impressive dish to serve at your next dinner party, my website has something for everyone.

                    Not only are my recipes delicious, but they are also easy to follow and use ingredients that are readily available at your local grocery store. I believe that cooking should be accessible to everyone, regardless of their skill level or budget, and I, <span className='text-green-400 font-semibold'>{chefName}</span>, strive to make my recipes as user-friendly as possible.

                    So why not give my recipes a try? I, <span className='text-green-400 font-semibold'>{chefName}</span>, guarantee that you won't be disappointed. Whether you're a seasoned chef or a beginner in the kitchen, my recipes will help you create meals that are sure to impress. So come on in, take a look around, and let's get cooking!
                </p>
            </div>
            <h1 className='text-center text-3xl font-bold text-pink-400'>My recipes</h1>
            <hr className='border-2 border-pink-400 my-4'/>

            <div className='my-4'>
                {
                    recipes.map((recipe, index) => <RecipeCard
                        key={index}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;