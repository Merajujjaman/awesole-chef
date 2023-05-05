import React from 'react';

const Service = () => {
    return (
        <div className='md:grid grid-cols-3 gap-2 my-4 '>
            <div className="card w-full bg-base-100 shadow-xl my-2 image-full">
                <figure><img src="https://img.freepik.com/free-vector/beautiful-food-menu-design-template_23-2149061881.jpg?w=740&t=st=1683214459~exp=1683215059~hmac=a2e8dfe3373438ad493dece90676857963ffb75ec76abc0498a0d32a48652832" alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-400 font-bold">Custom Menu Planning</h2>
                    <p>I will work with you to create a customized menu that meets your dietary preferences and budget. Whether it's a romantic dinner for two or a party for 50, I can help you plan a menu that will delight your guests and fit your needs.</p>
                    <p className='text-xl text-pink-400'>$50/hour</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl my-2  image-full">
                <figure><img src="https://img.freepik.com/free-photo/cropped-man-apron-putting-fried-chicken-from-frying-pan-plate_1098-20541.jpg?w=996&t=st=1683214824~exp=1683215424~hmac=5cbe35c9de7161a7412c99aad44c83e52788b2068bb65dbb19c2a9e58a09cc07" alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-400 font-bold">Private Cooking Lessons</h2>
                    <p>IWant to improve your cooking skills or learn new recipes? I offer private cooking lessons in the comfort of your own home. Whether you're a beginner or an experienced home cook, I can help you develop your skills and confidence in the kitchen.</p>
                    <p className='text-xl text-pink-400'>$70/hour</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl my-2 image-full">
                <figure><img src="https://img.freepik.com/free-photo/closed-metal-pots_1203-2059.jpg?w=996&t=st=1683214654~exp=1683215254~hmac=58f91ac0e4557776bb10d4a9c93671e79967113f1e7e59477469cc21a810c2cd" alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-400 font-bold">Catering Services</h2>
                    <p>Need to feed a large group? I provide full-service catering for weddings, corporate events, and other special occasions. From hors d'oeuvres to desserts, I can help you create a memorable event with delicious food and impeccable service.</p>
                    <p className='text-xl text-pink-400'>$70 and up</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;