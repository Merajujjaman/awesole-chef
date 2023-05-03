import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
    const { chefPicture, chefName, numberOfRecipes, yearsOfExperience, likes, id } = data
    // console.log(data)
    return (
        <div >
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='object-cover' src={chefPicture} alt="Chef photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{chefName}
                        <small className='text-pink-400 flex items-center gap-2'><FaThumbsUp></FaThumbsUp> {likes} </small>
                    </h2>
                    <p className='text-lg font-bold text-gray-400'>Year of experience:<span className='text-green-400'> {yearsOfExperience}</span></p>
                    <p className='text-lg font-bold text-gray-400'>Number of Recipes: <span className='text-green-400'>{numberOfRecipes}</span> </p>
                    <div className="card-actions justify-end">
                        <Link to={`/${id}`}>
                            <button className="btn btn-primary">Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;