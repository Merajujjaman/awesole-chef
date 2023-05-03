import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?w=996&t=st=1683051783~exp=1683052383~hmac=ac25d10d23c15d1f7cc5dff6468672acdd9ba0006edcfc2826797f20d9874c58" className="w-full md:h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20777.jpg?w=996&t=st=1683052046~exp=1683052646~hmac=0347f7d42ee59cd581a92545877c29911a214e799e2be5b24b86b810e74b5a7a" className="w-full md:h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg?w=996&t=st=1683051656~exp=1683052256~hmac=7902a2c5815c4db8e88511009cd487428f4f2d9eee0fd83656b7590cdae811bc" className="w-full md:h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/high-angle-delicious-indian-drink_23-2149312361.jpg?w=996&t=st=1683050989~exp=1683051589~hmac=2dff51952278a96b0258dab180291840d02945e6025f140abb2e833a1d2bb0eb" className="w-full md:h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;