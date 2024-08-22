import React from 'react';
import { Carousel } from 'antd';
import Banner1 from '../assests/images/banner1.jpg'
import Banner2 from '../assests/images/banner2.jpg'
import Banner3 from '../assests/images/banner3.jpg'
import Banner4 from '../assests/images/banner4.jpg'
import Banner5 from '../assests/images/banner5.jpg'
import Banner6 from '../assests/images/banner6.jpg'

const contentStyle = {
    width: '335px',
    height: '160px',
    objectFit: 'cover', // ensures images fit within the specified dimensions
};

const BannerCarousel = () => {
    return (
        <Carousel arrows infinite={true} autoplay={true}>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                    <img src={Banner1} alt="Banner 1" style={contentStyle} />
                    </div>
                    <div className="col-md-4">
                    <img src={Banner2} alt="Banner 2" style={contentStyle} />
                    </div>
                    <div className="col-md-4">
                    <img src={Banner3} alt="Banner 3" style={contentStyle} />
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                    <img src={Banner4} alt="Banner 1" style={contentStyle} />
                    </div>
                    <div className="col-md-4">
                    <img src={Banner5} alt="Banner 2" style={contentStyle} />
                    </div>
                    <div className="col-md-4">
                    <img src={Banner6} alt="Banner 3" style={contentStyle} />
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default BannerCarousel;
