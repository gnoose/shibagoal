import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stream = () => {


    const renderSlides = () =>
        ['/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg'].map(item => (
            <div>
                <div className="ml-10">
                    <img src={item} alt="" className="w-100 border border-5 border-dark rounded-xl overflow-hidden" />
                    <img src={item} alt="" className="w-100 border border-5 border-dark rounded-xl overflow-hidden mx-96 mt-10" />
                </div>                
            </div>
        ));


    return (
        <section className="bg-yellow py-5 overflow-hidden">
            <div className="slide-carousels py-md-5 my-xl-5">
                <Slider
                    dots={false}
                    slidesToShow={5}
                    slidesToScroll={0.5}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={100}
                    pauseOnHover={false}
                >
                    {renderSlides()}
                </Slider>
            </div>
        </section>
    )
}

export default Stream;