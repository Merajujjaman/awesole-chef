
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
    // console.log(recipe)
    const [disable, setDisable] = useState(false)
    const notify = () => {
        setDisable(!disable);
        return toast('Thanks for loving this Recipe!!')
    }

    const { cookingMethod, recipeImage, recipeName, ingredients, rating } = recipe
    return (
        <div className='my-8'>
            <div className="card w-full bg-base-100 shadow-xl">
                
                    <figure><img className='w-full h-96 object-cover' src={recipeImage} alt="foods image" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">
                        {recipeName}
                        <div className="badge badge-secondary">rating: {rating}</div>
                    </h2>
                    <hr className='border-2' />
                    <h2 className='text-2xl font-semibold text-green-500'>Ingredient:</h2>
                    <div>
                        {
                            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                        }
                    </div>
                    <h2 className='text-2xl font-semibold underline'>Cooking Methode:</h2>
                    <p className='text-lg font-bold'>{cookingMethod}</p>
                    <div className="card-actions justify-end">
                        <button onClick={notify} disabled={disable} className='btn btn-primary'>Favourite</button>
                    </div>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;