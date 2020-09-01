import React from 'react';

import Slider from "react-slick";

import './SliderImage.css'

const images = [
    {
        id:1,
        name: 'slide 1',
        path: 'https://www.teahub.io/photos/full/242-2423723_ladakh-bike-trip.jpg'
    },
    {
        id:2,
        name: 'slide 2',
        path: 'https://www.teahub.io/photos/full/177-1774647_ladakh-bike-trip.jpg'
    },
    {
        id:3,
        name: 'slide 3',
        path: 'https://www.teahub.io/photos/full/358-3584908_ladakh-wallpaper-hd.jpg'
    },
    {
        id:4,
        name: 'slide 4',
        path: 'https://www.teahub.io/photos/full/154-1548788_bike-trip-images-hd-download.jpg'
    },
    {
        id:5,
        name: 'slide 5',
        path: 'https://www.teahub.io/photos/full/242-2423626_image-alternative-text-bike-ladakh-wallpaper-hd.jpg'
    }

]


function SliderImage() {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        className:"slider"
    };

    return (
        <React.Fragment>
            <Slider {...settings}>
                {
                    images.map(image => {
                        return (
                            <div key={image.id}>
                                <img src={image.path} alt={image.name}/>
                            </div>
                        )
                    })
                }
            </Slider>
        </React.Fragment>
    )
}

export default SliderImage;
