import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard';
import Banner from '../shared/Banner';
import Service from '../Service';

const Home = () => {
    const ChefInfo = useLoaderData()
    // console.log(ChefInfo)

    return (
        <div className='md:w-4/5 mx-auto'>
            <Banner></Banner>

            <div className='my-12'>
                <h1 className='text-center font-bold text-3xl mb-2'>Hello, Food Lovers!!</h1>
                <hr className='mb-2 border-2'/>
                <p className='text-gray-500 px-4 text-justify'>
                    Welcome to <span className='font-bold'>Awesome-chef</span> , the ultimate destination for food lovers! Our website is dedicated to sharing our passion for food and providing a wide range of resources for home cooks and professional chefs alike.

                    On our website, you'll find a vast collection of recipes, ranging from classic comfort food to exotic international cuisine. We provide easy-to-follow instructions, complete with photos and videos, so you can recreate your favorite dishes in your own kitchen. Our website also features helpful tips and tricks for cooking, baking, and meal prep.

                    We take great pride in offering a diverse range of culinary styles, catering to a variety of dietary needs and preferences. Whether you're vegan, gluten-free, or simply looking for healthy meal options, you'll find plenty of inspiration on our website.

                    At <span className='font-bold'>Awesome-chef</span>, we believe that food is more than just sustenance - it's a way of bringing people together. That's why we also feature a vibrant community section, where you can connect with other food enthusiasts, share your recipes, and get advice from our team of culinary experts.

                    Thank you for visiting <span className='font-bold'>Awesome-Chef</span>! We hope you'll join us on our culinary journey and discover new flavors and techniques along the way.





                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-2 md:gap-4 my-6'>
                {
                    ChefInfo.map(data => <ChefCard
                        key={data.id}
                        data={data}
                    ></ChefCard>)
                }
            </div>
            
            <div>
                <h1 className='text-3xl text-center font-bold text-green-400 mt-6'>Our Services</h1>
                <hr className='border-2 border-green-400 my-2'/>
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;