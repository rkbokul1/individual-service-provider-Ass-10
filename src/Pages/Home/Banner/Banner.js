import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerFirst from '../../../img/services/banner-first.jfif';
import bannerSecond from '../../../img/services/banner-second.jfif';
import bannerThird from '../../../img/services/banner-third.jfif';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        height={'450px'}
                        className="d-block w-100"
                        src={bannerFirst}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={'450px'}
                        className="d-block w-100"
                        src={bannerSecond}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={'450px'}
                        className="d-block w-100"
                        src={bannerThird}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;