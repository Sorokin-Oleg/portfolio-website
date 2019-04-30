import React, {Component} from 'react';
import Slider from "react-slick";

class ModalGallary extends React.Component {
    
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };

        return(
            <div className='modal-gallary-container'>
                <div className='slider-content'>
                    <Slider {...settings}>
                        <img src="/assets/img/portfolio/01-small.jpg" alt="" style={{width:'100px'}} />
                        <img src="/assets/img/portfolio/02-small.jpg" alt="" style={{width:'50%'}}/>
                        <img src="/assets/img/portfolio/03-small.jpg" alt="" style={{width:'50%'}}/>
                        <img src="/assets/img/portfolio/04-small.jpg" alt="" style={{width:'50%'}}/>
                        <img src="/assets/img/portfolio/05-small.jpg" alt="" style={{width:'50%'}}/>
                        <img src="/assets/img/portfolio/06-small.jpg" alt="" style={{width:'50%'}}/>                        
                    </Slider>
                </div>
            </div>
        );
    };
};

export default ModalGallary;