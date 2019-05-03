import React, {Component} from 'react';
import Slider from "react-slick";

const ModalGallary = (props) => {    

    const settings = {
        dots: true,        
        lazyLoad: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    const image = props.imageData.image.map((element, index) => {
        return(
            <div key={index} className='modal-image-container'>
                <img src={element} alt={props.imageData.alt[index]}/>
            </div>
        );
    });

    let modalState = props.modalActive ? {display:'flex'} : {display:'none'};
    
    return(
        <div className='modal-gallary-container'style={modalState}>
            <button className='modal-gallary-button-close' onClick={props.modalClose}>
                <i className="fas fa-times"></i>
            </button>
            <div className='slider-content'>                
                <Slider {...settings}>
                    {image}
                </Slider>
            </div>
        </div>
    );
};

export default ModalGallary;